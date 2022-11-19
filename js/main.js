"use strict"
const {createApp}=Vue;
createApp({
    data(){
        return{
            activeContact:0,
            newMessage:"",
            searchInput:"",
            chuck:"",
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '10/07/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '10/06/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '10/07/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '10/08/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            answers:[
                "Sembra senza dubbio che la questione stia così.",
                "È verissimo quel che dici.",
                "Di' pure chiaro quel che vuoi dire.",
                "È molto chiaro.",
                "Tutto il contrario.",
                "Su per giù è così.",
                "È necessario.",
                "Lo vedo anche troppo bene.",
                "Ma certo.",
                "È giustissimo.",
                "Questo almeno è verosimile.",
                "Ma certamente!",
                "Sì, nel modo più assoluto.",
                "È molto giusto quello che dici.",
                "Bisogna ammetterlo senza riserva.",
                "In che senso dici?",
                "Di' pure come.",
                "Per quel che mi riguarda non mi sembra affatto che tu sbagli.",
                "È impossibile.",
                "Da quanto è stato detto almeno, pare così.",
                "Difficilmente, sicuro!",
                "Sarà così.",
                "Si può anche convenire.",
                "Anche questo.",
                "Senza remora alcuna, assolutamente.",
                "Senza meno.",
                "Come dici?",
                "Tu dici il vero.",
                "Certamente.",
                "Pressappoco.",
                "Bene.",
                "Nel modo più evidente.",
                "Come e a quale scopo dici questo?",
                "Assolutamente no.",
                "E come non ammetterlo?",
                "È verosimile.",
                "Assolutamente.",
                "Molto bene.",
                "Come no?",
                "Questo anch'io mi sento capace di affermarlo.",
                "Sta bene.",
                "Perché no?",
                "Sia pure così.",
                "Ebbene?",
                "Tu dici bene: bisogna fare così.",
                "Forse.",
                "Tutto questo è stato assolutamente chiarito a sufficienza.",
                "Non ho capito.",
                "Ma questo è impossibile.",
                "E che cos'altro potremmo dire?",
                "Veramente no.",
                "E come?",
                "Giustamente."
            ]
        }
    },
    methods:{
        changeActiveContact(i){
            this.activeContact=i;
        },
        addNewMessage(){
            if(this.newMessage.length>0){
                const newObjMessage={
                    date: new Date,
                    message: this.newMessage,
                    status: 'sent'
                }
                this.contacts[this.activeContact].messages.push(newObjMessage);
                this.newMessage="";
                setTimeout(()=>{
                    axios.get('https://api.chucknorris.io/jokes/random')
                    .then((response)=> {
                        this.chuck=response.data.value;
                        console.log(response.data.value)
                        const newMessaggeAnswer={
                            date: new Date,
                            message: this.answers[this.getRndInteger(0, this.answers.length)],
                            status: 'received'
                        }
                        this.contacts[this.activeContact].messages.push(newMessaggeAnswer);
                    });
                },1000);
            } 
        },
        searchContact(){
            this.contacts.forEach(contact => {
                if(this.searchInput.length===0){
                    contact.visible=true;
                }else if(contact.name.toUpperCase().includes(this.searchInput.toUpperCase())){
                    contact.visible=true;
                }else{
                    contact.visible=false;
                }
            });
        },   
        getDate(date){
            return moment(date).fromNow();
        },
        deleteMessage(i){
            if(this.contacts[this.activeContact].messages[i].status==="sent"){
                this.contacts[this.activeContact].messages.splice(i,1);
            }
        },
        getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
        }
    },
    created(){
        moment.locale("it");   
    }
}).mount("#app");