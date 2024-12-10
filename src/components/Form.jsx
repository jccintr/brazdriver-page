import React,{useState} from 'react'
import { Button, Textarea, Label, TextInput,Spinner,Alert } from "flowbite-react";

const Form = () => {
    const [isLoading,setIsLoading] = useState(false);
    const [formData,setFormData] = useState({});
    const [errorMessage,setErrorMessage] = useState(null);

    const handleChange = (e) => setFormData({...formData,[e.target.id]: e.target.value.trim()});
  
    const handleSubmit = async (e) => {
  
      e.preventDefault();
      
      if(!formData.nome) {
        setErrorMessage('Nome é de preenchimento obrigatório.');
        return;
      }

      if(!formData.telefone) {
        setErrorMessage('Telefone é de preenchimento obrigatório.');
        return;
      }
   
      // try {
      //   setIsLoading(true);
      //   setErrorMessage(null);
        
       
      //   const response = await Api.login(formData);
      //   //
      //   if(response.ok){
      //      setIsLoading(false);
      //      let jsonUser = await response.json();
      //      //alert('login deu certo')
      //      setLoggedUser(jsonUser);
      //      navigate('/?tab=dashboard');
      //   } else {
      //     console.log(await response.json());
      //     setLoading(false);
      //     setErrorMessage('Email e ou senha inválidos.');
      //      return;
      //   }
      //   setLoading(false);
      // } catch (error) {
      //   console.log(error);
      //   setLoading(false);
      // }
        
    }
   

  return (
    <div  className='bg-gray-200 py-8 flex flex-col w-full items-center justify-center px-5 gap-2  md:px-72 md:items-center'>
        <p className='text-2xl  text-stone-600 text-center font-semibold leading-relaxed md:text-3xl'>Preencha o formulário abaixo e candidate-se a uma vaga de motorista parceiro <span className='text-blue-800'>Braz Driver</span>.</p>
        <form className='w-full mt-4 md:w-2/3'>
            <div className="mb-1">
                <div className="mb-1 block">
                   <Label htmlFor="nome" value="Nome" />
                </div>
                <TextInput id="nome"  placeholder="Digite o seu nome" required onChange={handleChange}/>
            </div>
            <div className="mb-1">
                <div className="mb-1 block">
                   <Label htmlFor="telefone" value="Telefone" />
                </div>
                <TextInput id="telefone"  placeholder="Digite o seu telefone" required onChange={handleChange}/>
            </div>
            <div className="mb-1">
                <div className="mb-1 block">
                   <Label htmlFor="email1" value="Email (opcional)" />
                </div>
                <TextInput id="email1" type="email" placeholder="Digite o seu email" onChange={handleChange}/>
            </div>
            <div className="mb-1">
                <div className="mb-1 block">
                    <Label htmlFor="comment" value="Outras informações (opcional)" />
                </div>
                <Textarea id="comment" placeholder="Digite a sua mensagem"  rows={4} onChange={handleChange} />
            </div>

            {errorMessage&&<Alert className="mt-5" color='failure'>{errorMessage}</Alert>}
           
            <Button className='w-full mt-4' color='blue'  type='submit' disabled={isLoading}>
              {isLoading ? <Spinner size='sm'/>: 'ENVIAR'}
            </Button>
        </form>
         
    </div>
  )
}

export default Form