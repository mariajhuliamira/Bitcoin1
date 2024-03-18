
import React, { useState } from "react";
import { TextInput, View, Text, Button } from "react-native"
import ResultImc from "./ResultImc/Index";

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular IMC")


    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

        function validationImc(){
            if(weight != null && height != null){
                imcCalculator()
                setHeight(null)
                setWeight(null)
                setMessageImc(" imc é igual: ")
                setTextButton("Calcular Novamente")
                return
            }

            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha peso e Altura")
        }

    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                onChangeText={setHeight}
                value={height}
                placeholder="EX. 1.75"
                keyboardType="numeric"
                ></TextInput>

                <Text>Peso</Text>
                <TextInput
                onChangeText={setWeight}
                value={weight}
                 placeholder="EX. 75.365"
                  keyboardType="numeric"
                ></TextInput>
                <Button
                onPress={() => validationImc()}
                 title={textButton}
                 color="#61dafb"/>
                 
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}