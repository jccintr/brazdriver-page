import React,{useState} from 'react'
import { Button, Textarea, Label, TextInput,Spinner,Alert,Toast  } from "flowbite-react";
import emailjs from '@emailjs/browser';
import { HiCheck, HiExclamation, HiX } from "react-icons/hi";

const Form = () => {
    const [isLoading,setIsLoading] = useState(false);
    const [formData,setFormData] = useState({});
    const [errorMessage,setErrorMessage] = useState(null);
    const [showToast,setShowToast] = useState(false);
    const [showErrorToast,setShowErrorToast] = useState(false);

    const handleChange = (e) => setFormData({...formData,[e.target.id]: e.target.value});
  
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

      setIsLoading(true);
      const templateParams = {
        from_name: formData.nome,
        from_email: formData.email,
        from_phone: formData.telefone,
         message: formData.mensagem
     }
   
     const response = await emailjs.send('service_kr87iur', 'template_94rgxkg', templateParams,'9Fk204d4daU3I1Y6n')
     if (response.status===200){
          setFormData({nome:'',telefone:'',email:'',mensagem:''});
           setIsLoading(false);
           setShowToast(true);
           return;
     }
     setIsLoading(false);
     setShowErrorToast(true);
     return;   
    }
   

  return (
    <div  className='bg-gray-200 py-8 flex flex-col w-full items-center justify-center px-5 gap-2  md:px-72 md:items-center'>
        <p className='text-2xl  text-stone-600 text-center font-semibold leading-relaxed md:text-3xl'>Preencha o formulário abaixo e candidate-se a uma vaga de motorista parceiro <span className='text-blue-800'>Braz Driver</span>.</p>
        <form className='w-full mt-4 md:w-2/3' onSubmit={handleSubmit}>
            <div className="mb-1">
                <div className="mb-1 block">
                   <Label htmlFor="nome" value="Nome" />
                </div>
                <TextInput id="nome" value={formData.nome} placeholder="Digite o seu nome" required onChange={handleChange}/>
            </div>
            <div className="mb-1">
                <div className="mb-1 block">
                   <Label htmlFor="telefone" value="Telefone" />
                </div>
                <TextInput id="telefone"  value={formData.telefone} placeholder="Digite o seu telefone" required onChange={handleChange}/>
            </div>
            <div className="mb-1">
                <div className="mb-1 block">
                   <Label htmlFor="email" value="Email (opcional)" />
                </div>
                <TextInput id="email" value={formData.email} type="email" placeholder="Digite o seu email" onChange={handleChange}/>
            </div>
            <div className="mb-1">
                <div className="mb-1 block">
                    <Label htmlFor="mensagem" value="Outras informações (opcional)" />
                </div>
                <Textarea id="mensagem" value={formData.mensagem} placeholder="Digite a sua mensagem"  rows={4} onChange={handleChange} />
            </div>

            {errorMessage&&<Alert className="mt-5" color='failure'>{errorMessage}</Alert>}
           
            <Button className='w-full mt-4' color='blue'  type='submit' disabled={isLoading}>
              {isLoading ? <Spinner size='sm'/>: 'ENVIAR'}
            </Button>
        </form>
        {showToast&&<Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <HiCheck className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-semibold">Mensagem enviada com sucesso.</div>
            <Toast.Toggle />
        </Toast>}
        {showErrorToast&&<Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
          <HiX className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-semibold">Falha ao enviar mensagem.</div>
        <Toast.Toggle />
      </Toast>}
    </div>
  )
}

export default Form