/*Faça um algoritmo de ordenação utilizando o método bubble sort na linguagem C.
Para isso, você deve criar um método em que o tamanho do vetor seja dez e deve estar em ordem crescente.

O vetor deverá:
- comparar seus elementos dois a dois adjacentes;
- se os elementos não estiverem em ordem, então ordenar;
- senão, avançar para o próximo par;
- repetir a operação até que nenhuma troca possa ser feita no vetor inteiro.*/ 





void ordem (int array[], int b){
    int m,o, help;

    for(m = 0; m<b;m++){

        for(o = 0; o<b-1-m;o++){

            if(array[o]>array[o+1]){
                help = array[o];
                array[o] = array[o+1];
                array[o] = help;
            }
        }
    }
}


 main (void){
    int a, b=10, array[10]={10, 3, 2, 6, 7, 9, 1, 8, 4, 5};

    ordem(array,b);
}

// ja tinha estudado estrutura de dados antes e foi tranquilo porem eu nao lembrava de muita coisa
// e fui ver mais sobre na internet