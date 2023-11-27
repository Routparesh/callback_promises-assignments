function ageInDays(firstname, lastname, ageYear){
        this.firstname = firstname;
        this.lastname = lastname;
        this.ageYear = ageYear;

        let fullName = this.firstname + ' ' + this.lastname; 

        return function logResults(){
            let totalDays = 2023 - ageYear;
            let ageInDays = totalDays * 365;
            console.log(`The Person full name is ${fullName} and their age in days is ${ageInDays}`)
        }         
}

var logBack = ageInDays('bapu', 'rout',1994);
logBack();

