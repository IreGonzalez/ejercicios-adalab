
import { useState } from 'react';
import Preview from './Preview';
import Form from './Form'

const App = () => {
  // Estados del componente
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('España peninsular'); // Iniciamos el componente con la primera opción del select
  const [paymentType, setPaymentType] = useState('');
  const [legalTerms, setLegalTerms] = useState(false);
  // Eventos
  const handleName = (value) => {
    setName(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handleRegion = ev => {
    setRegion(ev.target.value);
  };

  const handlePaymentType = ev => {
    setPaymentType(ev.target.value);
  };

  const handleLegalTerms = ev => {
    // Como lo que nos interesa es si está activo o no guardamos el checked
    setLegalTerms(ev.target.checked);
  };


  const handleForm = ev => {
    ev.preventDefault();
    console.log('Enviando datos al servidor...');
  };

  const handleResetButton = () => {
    // Ponemos los mismo valores que hemos usado arriba en los useState
    setName('');
    setEmail('');
    setRegion('España peninsular');
    setPaymentType('');
    setLegalTerms(false);
  };


  // Funciones que nos ayudan a renderizar

  const isValidForm = () => {
    // El formulario solo es válido cuando los inputs de tipo texto no estén vacíos, cuando se haya marcado una tipo de pago y cuando los términos legales sean true
    // También podríamos comprobar que el email tiene el formato correcto, pero no queremos complicar este ejemplo
    if (name !== '' && email !== '' && paymentType !== '' && legalTerms === true) {
      return true;
    } else {
      return false;
    }
  };


  return (
    <div>
      <Form
        name={name}
        email={email}
        region={region}

        handleForm={handleForm}
        handleName={handleName}
        handleEmail={handleEmail}
        handleRegion={handleRegion}
        paymentType={paymentType}
        handlePaymentType={handlePaymentType}
        legalTerms={legalTerms}
        handleLegalTerms={handleLegalTerms}
        handleResetButton={handleResetButton}
        isValidForm={isValidForm}
      />
      <Preview
        name={name}
        email={email}
        region={region}
        paymentType={paymentType}
        legalTerms={legalTerms === true ? 'Sí' : 'No'}
      />

    </div>
  );
};

export default App;
