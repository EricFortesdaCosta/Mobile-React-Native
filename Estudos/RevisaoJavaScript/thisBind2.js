function pessoa(){
    this.idade = 0 
    
    //referenciando a instancia do Objeto
    const self =this

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 2000)
}

new pessoa() 