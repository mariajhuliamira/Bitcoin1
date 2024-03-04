
import React, { useState } from "react";
import { TextInput, View, Text, Button } from "react-native"
import ResultImc from "./ResultImc/Index";

export default function Form(){

    const [height, setHeitght] = useState(null)
    const [weight, setWeght] = useState(null)
    const [messageImc, setMassageImc] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular IMC")


    function imcCalculator(){
        return((weight/(height*height)).toFixed(2))
    }

        function validationImc(){
            if(weight != null && height != null){
                imcCalculator()
                setHeitght(null)
                setWeght(null)
                setMassageImc(" imc é igual: ")
                setTextButton("Calcular Novamente")
                return
            }

            setImc(null)
            setTextButton("Calcular")
            setMassageImc("Preencha peso e Altura")
        }

    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                onChange={setHeitght}
                value={height}
              //  placeholder="EX. 1.75"
              //  keyboardType="numeric"
                ></TextInput>

                <Text>Peso</Text>
                <TextInput
                onChange={setWeght}
                value={weight}
                 // placeholder="EX. 75.365"
                 // keyboardType="numeric"
                ></TextInput>
                <Button
                onPress={() => validationImc()}
                 title={textButton}/>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}