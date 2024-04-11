/**
 * 
 */

 function portero(){
	 //COMO DIFERENCIAR FECHAS :
	 
	 //INSERTE LOS DIAS MES Y AÑOS
	 const dia = prompt("Inserte dia de nacimiento");
	 const mes = prompt("Inserte mes de nacimiento");
	 const anyo = prompt("Inserte año de nacimiento");
	 
	 //CREE LA FECHA
	 const fechaCompletaUsuario = new Date(anyo, (mes-1), dia);
	
	//CREE UNA FECHA DE HOY
	 const fechaHoy = new Date();
	 
	 //SE CREA UN AVARIABLE PARA GAURDAR LA DIFERENCIA DE FECHA ENTRE EL DIA DE HOY Y LA FECHA DE NACIMIENTO
	let diferenciaFechas;
	
	//SE RESTA LOS MILISEGUNDOS DE AMBAS FECHAS (ESTA ES LA MANERA MAS FACIL)
	diferenciaFechas = new Date(fechaHoy.getTime() - fechaCompletaUsuario.getTime())
	
	//SE RESTA LOS AÑOS DE LA DIFERENCIA MENOS 1970, YA QUE LOS MILISENGUNDOS PARTEN DESDE EL AÑO 1970, DE NO BORRARLO SE NOS SUMARIA A LA DIFERENCIA DANDONOS POR EJEMPLO 1919 (SI EL AÑO DEL USUARIO FUERA 19 AÑOS0)
	let añoDiferencia = diferenciaFechas.getFullYear() - 1970;
	
	//LUEGO SE CREA UN IF PARA REGULAR QUE LOS MESES, EN CASO DE QUE CUMPLA AÑOS EL USUARIO PERO NO HAYA PASADO TODAVIA EL MES DE NACIMIENTO
	if(diferenciaFechas.getMonth() <  fechaHoy.getMonth()){
			Number(añoDiferencia) - Number(1);
	}
	
	//SE REGULA SI ES MENOR DE 18 AÑOS
	if(añoDiferencia >= 18){
		
		alert("Es mayor de edad, puede pasar");
	}
	else{
		alert("Es menor de edad, no puede pasar");
	}
	
	
	
	 
 }
 
 