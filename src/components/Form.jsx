import React,{useState} from 'react'
import { Button, Textarea, Label, TextInput,Spinner } from "flowbite-react";

const Form = () => {
    const [isLoading,setIsLoading] = useState(false);

  return (
    <div  className='bg-gray-200 py-8 flex flex-col w-full items-center justify-center px-5 gap-2  md:px-72 md:items-center'>
        <p className='text-2xl  text-stone-600 text-center font-semibold leading-relaxed md:text-3xl'>Preencha o formulário abaixo e candidate-se a uma vaga de motorista parceiro <span className='text-blue-800'>Braz Driver</span>.</p>
        <form className='w-full mt-4 md:w-2/3'>
            <div className="mb-1">
                <div className="mb-1 block">
                   <Label htmlFor="nome" value="Nome" />
                </div>
                <TextInput id="nome"  placeholder="Digite o seu nome" required />
            </div>
            <div className="mb-1">
                <div className="mb-1 block">
                   <Label htmlFor="telefone" value="Telefone" />
                </div>
                <TextInput id="telefone"  placeholder="Digite o seu telefone" required />
            </div>
            <div className="mb-1">
                <div className="mb-1 block">
                   <Label htmlFor="email1" value="Email (opcional)" />
                </div>
                <TextInput id="email1" type="email" placeholder="Digite o seu email" />
            </div>
            <div className="mb-1">
                <div className="mb-1 block">
                    <Label htmlFor="comment" value="Outras informações (opcional)" />
                </div>
                <Textarea id="comment" placeholder="Digite a sua mensagem"  rows={4} />
            </div>
           
            <Button className='w-full mt-4' color='blue'  type='submit' disabled={isLoading}>
              {
                isLoading ? <Spinner size='sm'/>: 'ENVIAR'
                }
              </Button>
        </form>
         
    </div>
  )
}

export default Form