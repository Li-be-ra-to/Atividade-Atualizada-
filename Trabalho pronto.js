var cpf = "126.771.827-77"
var email =  ""
var cnpj = "20.806.466/0001-96" //XX.XXX.XXX/(0001 ou 0002)-XX

class Validacoes {

    constructor(email, cpf, cnpj){
        this.email = email
        this.cpf = cpf
        this.cnpj = cnpj
    }

    validacaoEmail(email){

        let emCar = []

        if(email.length > 256)return false;

        for(let c = 0; c <= email.length; c++) emCar = email.charAt(c);

        const i = email.indexOf('@')
        var v =i
        if(i > 64)return false;

        for(let c = 0; c <= email.length; c++ ){
            //antes do "@"
            if(c < i){

                if(c == 0 && parseInt(emCar) >= 0)return false;
                
                if((c == 0 || c == (i-1))&&  emCar[c] == '-')return false;
                if((c == 0 || c == (i-1))&&  emCar[c] == '.')return false;
                if((c == 0 || c == (i-1))&&  emCar[c] == '_')return false;
                
                if((email.charAt(c) == '-') && (email.charAt(c-1) || (email.charAt(c+1))))return false;
                if((email.charAt(c) == '_') && (email.charAt(c-1) || (email.charAt(c+1))))return false;
                if((email.charAt(c) == '.') && (email.charAt(c-1) || (email.charAt(c+1))))return false;
                
                if((email.charAt(v-1) == '-'))return false;
                if((email.charAt(v-1) == '_'))return false;
                if((email.charAt(v-1) == '.'))return false;
            }
            //depois do "@"
            if(c > i){
                for(var p = i; i>=email.length; p++);
                if(c >255)return false;
                for(let s =i; s<= p; s++){
                let aux = 0
                
                if(email.charAt(i)== '.') aux = 0;
                if(aux > 62)return false;

                if((aux == 0) &&  ((email.charAt[i] != [0,1,2,3,4,5,6,7,8,9]) || ((email.charAt[i].toLowerCase() && email.charAt[i].toUpperCase()) == email.charAt(i))))return false;
                aux++
                }
            }
        }
        return true
    }

    validacaoCPF(cpf){

        let [ soma, resto, mult ] = [ 0, 0, 10 ]
        let quantidadeFatores = []

        cpf=cpf.replace('.', '');
        cpf=cpf.replace('.', '');
        cpf=cpf.replace('-', '');

        for(let c = 0; c <= 10; c++){
            quantidadeFatores[c] = cpf.charAt(c)
        }
        
            if(quantidadeFatores.length != 11 ) return false;

            for(let c = 0; c <=8; c++){
                soma += parseInt(cpf.charAt(c)) * mult-- 
            }
            resto = (soma * 10)%11 
            
            if ((resto == 10) || (resto == 11)){
                resto = 0
            }
            
            if (resto != parseInt(cpf.charAt(9))) return false;
            soma = 0
            mult = 11
            for(let c = 0; c <=9; c++){
                soma += parseInt(cpf.charAt(c)) * mult-- 
            }
            resto = (soma * 10)%11
            if ((resto == 10) || (resto == 11)){
                resto = 0
            }
            if(resto == parseInt(cpf.charAt(10)) ) return true; 
            return false;
    }

    validacaoCNPJ(cnpj){
        let [soma, resto] = [0, 0]
        let Fatores = []

        cnpj = cnpj.replace('.', '');
        cnpj = cnpj.replace('.', '');
        cnpj = cnpj.replace('/', '');
        cnpj = cnpj.replace('-', '');
        
        const somaFatores = function(cnpj, l, jj){
            for(let c = 0; c<=jj; c++) {
                if(l == 1){
                    l=9
                }
                soma += (l* parseInt(cnpj.charAt(c)))
            l--
            }
            
            return soma;
        }
        for(let c = 0; c <=13; c++){
            Fatores[c] = cnpj.charAt(c)
        }

        if(Fatores.length != 14) return false;

        resto = somaFatores(cnpj, 5, 11)%11

        if(resto < 2) {
            resto = 0
            if(resto != parseInt(cnpj.charAt(12))) return false;  
        }
            resto = 11 - resto;
            if(resto != parseInt(cnpj.charAt(12)))  return false;
        soma = 0;
        resto = somaFatores(cnpj, 6, 12)%11
        
        if(resto < 2){
            resto = 0; 
            if(resto == parseInt(cnpj.charAt(13))) return true;
            return false;
        }
            resto = 11 -resto
            if(resto == parseInt(cnpj.charAt(13))) return true ;
            return false;
    }
}

const val = new Validacoes()


        
console.log(`Verificação Email: ${val.validacaoEmail(email)}`)
console.log(`Verificação CPF: ${val.validacaoCPF(cpf)}`)
console.log(`Verificação CNPJ: ${val.validacaoCNPJ(cnpj)}`)
