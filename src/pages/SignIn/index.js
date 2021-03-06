import React, { useRef, useState } from 'react';
import { StatusBar } from 'react-native';
import { Image } from 'react-native';
import Background from '../../components/Background';
import { useDispatch, useSelector } from 'react-redux';

import logo from '../../assets/logo.png';

import { signInRequest } from '../../store/modules/auth/actions';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const [id, setId] = useState();

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(id));
  }

  return (
    <>
      <Background>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Container>
          <Image source={logo} />

            <Form>
              <FormInput
                keyboardType="numeric"
                autoCorrect={false}
                placeholder="Informe seu ID de cadastro"
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
                value={id}
                onChangeText={setId}
              />

              <SubmitButton loading={loading} onPress={handleSubmit}>Entrar no sistema </SubmitButton>
            </Form>

        </Container>
      </Background>
    </>
  );
}
