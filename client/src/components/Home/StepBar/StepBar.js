import Steps, { Step } from "rc-steps";
import "rc-steps/assets/index.css";
import React from "react";

const StepBar = () => {
    return (
        <Steps direction="vertical" current={2} status="sucess">
            <Step
                title="Aberto"
                description="Pedido enviado"
            />
            <Step
                title="Análise"
                description="Aguardando aprovação do pedido"
            />
            <Step
                title="Em andamento"
                description="O serviço já está sendo realizado"
            />
            <Step
                title="Concluído"
                description="Finalizado"
            />
        </Steps>
    );   
}


export default StepBar;