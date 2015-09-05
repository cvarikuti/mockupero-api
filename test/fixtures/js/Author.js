
var id = require('pow-mongodb-fixtures').createObjectId;
var admin = require('./User')[0];
var adminId = admin._id;

exports.author = [
    {
        "_id": id(),
        "name": "J. R. R. Tolkien",
        "description": "John Ronald Reuel Tolkien, CBE (/ˈtɒlkiːn/ tol-keen; 3 January 1892 – 2 September 1973) was an English writer, poet, philologist, and university professor, best known as the author of the classic high fantasy works The Hobbit, The Lord of the Rings, and The Silmarillion.",
        "createdUser": adminId,
        "updatedUser": adminId
    },
    {
        "_id": id(),
        "name": "Leo Tolstoy",
        "description": "Count Lev Nikolayevich Tolstoy (Russian: Лев Никола́евич Толсто́й, pronounced [lʲef nʲɪkɐˈlaɪvʲɪt͡ɕ tɐlˈstoj] ( listen); 9 September [O.S. 28 August] 1828 – 20 November [O.S. 7 November] 1910), also known as Leo Tolstoy, was a Russian writer and philosopher who primarily wrote novels and short stories. Tolstoy was a master of realistic fiction and is widely considered one of the world's greatest novelists. He is best known for two long novels, War and Peace (1869) and Anna Karenina (1877). Tolstoy first achieved literary acclaim in his 20s with his semi-autobiographical trilogy of novels, Childhood, Boyhood, and Youth (1852-1856) and Sevastopol Sketches (1855), based on his experiences in the Crimean War. His fiction output also includes two additional novels, dozens of short stories, and several famous novellas, including The Death of Ivan Ilych, Family Happiness, and Hadji Murad. Later in life, he also wrote plays and essays. Tolstoy is equally known for his complicated and paradoxical persona and for his extreme moralistic and ascetic views, which he adopted after a moral crisis and spiritual awakening in the 1870s, after which he also became noted as a moral thinker and social reformer.",
        "createdUser": adminId,
        "updatedUser": adminId
    },
    {
        "_id": id(),
        "name": "William Gibson",
        "description": "William Ford Gibson (born March 17, 1948) is an American-Canadian speculative fiction novelist who has been called the \"noir prophet\" of the cyberpunk subgenre. Gibson coined the term \"cyberspace\" in his short story \"Burning Chrome\" (1982) and later popularized the concept in his debut novel, Neuromancer (1984). In envisaging cyberspace, Gibson created an iconography for the information age before the ubiquity of the Internet in the 1990s. He is also credited with predicting the rise of reality television and with establishing the conceptual foundations for the rapid growth of virtual environments such as video games and the World Wide Web.",
        "createdUser": adminId,
        "updatedUser": adminId
    },
    {
        "_id": id(),
        "name": "Herbert George “H.G.” Wells",
        "description": "Herbert George “H.G.” Wells (21 September 1866 – 13 August 1946) was an English writer, now best known for his work in the science fiction genre. He was also a prolific writer in many other genres, including contemporary novels, history, politics, and social commentary, even writing textbooks and rules for war games. Wells is sometimes called The Father of Science Fiction, as are Jules Verne and Hugo Gernsback. His most notable science fiction works include The War of the Worlds, The Time Machine, The Invisible Man, and The Island of Doctor Moreau.",
        "createdUser": adminId,
        "updatedUser": adminId
    },
    {
        "_id": id(),
        "name": "Jules Verne",
        "description": "Jules Gabriel Verne (French: [ʒyl vɛʁn]; 8 February 1828 – 24 March 1905) was a French novelist, poet, and playwright best known for his adventure novels and his profound influence on the literary genre of science fiction.\r\nBorn to bourgeois parents in the seaport of Nantes, Verne was trained to follow in his father's footsteps as a lawyer, but quit the profession early in life to write for magazines and the stage. His collaboration with the publisher Pierre-Jules Hetzel led to the creation of the Voyages Extraordinaires, a widely popular series of scrupulously researched adventure novels including Journey to the Center of the Earth, Twenty Thousand Leagues Under the Sea, and Around the World in Eighty Days.\r\nVerne is generally considered a major literary author in France and most of Europe, where he has had a wide influence on the literary avant-garde and on surrealism. His reputation is markedly different in Anglophone regions, where he has often been labeled a writer of genre fiction or children's books, not least because of the highly abridged and altered translations in which his novels are often reprinted.\r\nVerne is the second most-translated author in the world since 1979, between the English-language writers Agatha Christie and William Shakespeare, and probably was the most-translated during the 1960s and 1970s. He is one of the authors sometimes called \"The Father of Science Fiction\", as are H. G. Wells and Hugo Gernsback.",
        "createdUser": adminId,
        "updatedUser": adminId
    }
];