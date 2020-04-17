import React from "react";
import { ContactSection, ContactTitle, Span, Form, Input, FormInput, InputText, InputEmail, InputExp, TextArea, InputSubmit } from "./style";

const Contact = () => {
    return (
        <ContactSection>
            <div className="container">
                <ContactTitle><Span>Une question, une remarque ? </Span>Veuillez me contacter **</ContactTitle>
                    <Form action="">
                        <FormInput>
                            <InputText type="text" placeholder="Votre nom" required autofocus />
                            <InputEmail type="email" placeholder="Votre adresse E-mail" required />
                        </FormInput>
                            <InputExp type="text" class="sub" placeholder="Votre sujet" required />
                            <TextArea cols="30" rows="10" placeholder="Votre message ..." required></TextArea>
                            <InputSubmit type="submit" value="Envoyer" />
                    </Form>
            </div>
        </ContactSection>
);
};

export default Contact;
