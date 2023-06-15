var altitude = prompt("Digite a altura em (Km/h): ");

var result = altitude > 0 && altitude <= 20 ? "TROPOSFERA"
      : altitude > 20 && altitude <= 50 ? "ESTRATOSFERA"
            : altitude > 50 && altitude <= 80 ? "MESOSFERA"
                  : altitude > 80 && altitude <= 450 ? "TERMOSFERA"
                        : "EXOSFERA";

return result;

function solucao(olhosNasLaterais) {
      if (olhosNasLaterais == false)
            return "PREDADOR";
      else
            return "PRESA";
}

function solucao(peso1, peso2) {
      
      if (peso1 < 85 && peso2 < 85 || peso1 >= 85 && peso2 >= 85)
            return "PODEM LUTAR";
      else
            return "NAO PODEM LUTAR";

}