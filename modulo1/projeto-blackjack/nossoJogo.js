/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    function comprarCarta() {
      // Cria array de cartas
      const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    
      // Cria array de naipes
      const naipes = ["♦️", "♥️", "♣️", "♠️"]
    
      // Sorteia uma carta
      const numero = cartas[Math.floor(Math.random() * 13)]
    
      // Sorteia um naipe
      const naipe = naipes[Math.floor(Math.random() * 4)]
    
      let valor
    
      // Verifica se é uma das letras e coloca o valor correspondente na variável valor
      if (numero === "A") {
        valor = 11
      } else if (numero === "J" || numero === "Q" || numero === "K") {
        valor = 10
      } else { // Se nao for uma das letras, só converte a string para número
        valor = Number(numero)
      }
    
      // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
      const carta = {
        texto: numero + naipe,
        valor: valor
      }
    
      return carta
    }

    console.log ("Bem vindo ao jogo BlackJack!")

    if (confirm("Vamos Jogar?")){

    const cartaUsuario1 = comprarCarta ()
    const cartaUsuario2 = comprarCarta ()
    const cartaPc1 = comprarCarta()
    const cartaPc2 = comprarCarta()
   
    const pontoUsuario = cartaUsuario1.valor +cartaUsuario2.valor
    const pontoPc = cartaPc1.valor + cartaPc2.valor

    console.log (`Suas cartas são ${cartaUsuario1.texto} e ${cartaUsuario2.texto}. Seus pontos são ${pontoUsuario}`)
    console.log (`As cartas do computador são ${cartaPc1.texto} e ${cartaPc2.texto}. Os pontos do computador são ${pontoPc}`)
    
    if (pontoUsuario===pontoPc){
       console.log ("Deu empate!")

  }else if (pontoPc < pontoUsuario){

       console.log ("Você venceu!")
       
  }else{
     console.log ("O computador venceu!")
  }
    
  }
   
   else{

      console.log ("O jogo acabou :(")
   }