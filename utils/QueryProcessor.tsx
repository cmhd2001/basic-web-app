export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("usb id")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "TU USB ID DEBERÍA ESTAR AQUÍ" );
  }

  if (query.toLowerCase().includes("name")) {
    return ( "PaniK" );
  }

  if (query.toLowerCase().includes("largest")) {

    const matches = query.match(/\d+/g); 

    if (matches) { 
      const numbers = matches.map(Number); 
 
      const largest = Math.max(...numbers); 
    
      return largest.toString();
    } else{
      return "Null numbers not valid."
    }
  }

  if (query.toLowerCase().includes("plus")) {

    
    const matches = query.match(/\d+/g);

    if (matches && matches.length === 2) { 
      // Convertir los matches a números 
      const num1 = parseInt(matches[0], 10); 
      const num2 = parseInt(matches[1], 10); 

      // Calcular la suma 
      const sum = num1 + num2;

      return sum.toString();
    }
  }

  return "";
}
