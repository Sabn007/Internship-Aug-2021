var obj = {
    name :'Sabin',
    age: 23,
    hobby :{
        outdoor :'football',
        indoor: 'coding'
    },
    personality: function(){
        console.log('I am a'+ " " + this.name);
}
    }


var obj2 = {
    Sname :'Sabin',
    age: 23,
    hobby :{
        outdoor :'football',
        indoor: 'coding'
    }
}
obj.surname = "Maharjan"
obj.intro = function(){
    console.log('I am a'+ " " + 'as');
}
obj.personality()
console.log('I am a');

