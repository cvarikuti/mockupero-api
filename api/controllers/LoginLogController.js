/**
 * LoginLogController
 *
 * @description :: Server-side logic for managing loginlogs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
    login: function(req, res) {
        var socketId = '';
        if (req.isSocket) {
            socketId = sails.sockets.id(req.socket);
        }
        username_val = req.param('username');
        User.find().where({
            username: username_val
        }).exec(function(err1, foundUser) {
            if (foundUser.length == 0) {
                return res.send('Not found user bb');
            }
            if (err1) {
                console.error(err1);
            } else {
                LoginLog.find().where({
                    username: username_val
                }).exec(function(err2, foundLogin) {
                    if (err2) {
                        console.error(err2);
                    } else {
                        if (foundLogin.length == 0) {
                            LoginLog.create({
                                userId: foundUser[0].id,
                                username: foundUser[0].username,
                                online: true,
                                socketId: socketId
                            }).exec(function(err3, createdLog) {
                                return res.send(createdLog[0]);
                            });
                        } else {
                            LoginLog.update({
                                id: foundLogin[0].id
                            }, {
                                online: true
                            }).exec(function afterwards(err, updated) {
                                if (err) {
                                    return res.send('failed');
                                }
                                LoginLog.publishUpdate(updated[0].id, { online: updated[0].online, username: updated[0].username });
                                sails.sockets.broadcast('loginLog', { value: updated[0] });
                                return res.send(updated[0]);
                            });
                        }
                    }
                });
            }
        });
    },
    logout: function(req, res) {
        if (req.isSocket) {
            username_val = req.param('username');
            User.find().where({
                username: username_val
            }).exec(function(err1, foundLoginList) {
                if (foundLoginList.length > 0) {
                    for (i = 0, len = foundLoginList.length; i < len; i++) {
                        console.log('This is the example');
                        var foundLogin = foundLoginList[0];
                        LoginLog.update({
                            userId: foundLogin.id
                        }, {
                            online: false
                        }).exec(function afterwards(err, updated) {
                            if (err) {
                                return res.send('error');
                            }
                            LoginLog.publishUpdate(updated.id, { online: false, username: updated.username });
                            sails.sockets.broadcast('loginLog', { value: updated });
                            return res.send(updated);
                        });
                    }
                } else {
                    return res.send('');
                }
            });
        }
    },
    resetLogin: function(req, res) {
        LoginLog.find().exec(function(err, foundLogin) {
            if (err) {
                //console.log(('Error to reset login');
                return;
            } else {
                //console.log(('removing login logs');
                foundLogin.forEach(function(value) {
                    value.destroy();
                    return res.send('success');
                });
            }
        });
    }
};
