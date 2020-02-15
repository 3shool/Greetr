;(function(global, $){
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language)
    }

    var supportedLangs = ['en', 'hn'];

    var greetings = {
        en: 'Heyya!',
        hn:'Array!'
    }

    var formalGreetings = {
        en: 'Hello!',
        hn: 'Namaste!'
    }


    var logMessages = {
        en: 'Logged In!',
        hn: 'Mein Logged in Hoon!'
    }


    Greetr.prototype = {
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },
        validate: function() {
            if(supportedLangs.indexOf(this.Language) === -1) {
                throw "Invalid Language";
            }
        },
        greeting: function() {
            return greetings[this.language]  + ' ' + this.firstName + ' !';
    
        },
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        greet: function(formal) {
            var msg;
            if(formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if(console) {
                console.log(msg);
            }
            return this;
        },
        log: function() {
            if(console) {
                console.log(logMessages[this.language]+' : ' + this.fullName());
            }
            return this;
        },
        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;
        },
        HTMLgreeting: function(selector, formal) {
            if(!$) {
                throw 'Jquery not supported';
            }

            if(!selector) {
                throw 'Missing Jquery selector';
            }
            var msg;

            if(formal) {
                msg = this.formalGreeting();
            }
            else
            {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }

    };
     
    Greetr.init = function(firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        // self.validate();
    }
    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr

})(window, $);