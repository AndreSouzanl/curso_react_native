# comando para criar um projeto:
 npx create-expo-app MeuProjeto --template expo-template-blank@sdk-50

 Observe que no lugar de 'MeuProjeto' você pode utilizar o nome que desejar. Os únicos requisitos são que o nome não deve ter espaço, acentos ou caracteres especiais; Apenas letras, números, traço (-) e underline (_) são permitidos.
------------------------------------------------------
# Navegação com react native
 ------------------------------------------------------
 Para instalar a biblioteca React Navigation, abra o terminal na raiz do seu projeto e execute o comando do Código 1.

npm install @react-navigation/native

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-masked-view/masked-view

Até agora aprendemos que para criar um aplicativo que navegue entre telas é necessário:

Instalar a biblioteca @react-navigation/native para gerenciar a navegação do aplicativo.

Instalar a biblioteca correspondente com o tipo de navegação que vamos utilizar que pode ser: @react-navigation/drawer, @react-navigation/bottom-tabs ou @react-navigation/stack.
Com isso em mente podemos avançar e conhecer cada um desses tipos de navegação.


Instalando a biblioteca
Como vimos anteriormente, para utilizar este tipo de navegação é necessário instalá-la no seu projeto. Isso é feito executando o comando do Código 1 no terminal do VSCode ou no cmd do Windows.

npm install @react-navigation/bottom-tabs

dependencias

npx expo install @react-navigation/native
npx expo install @react-navigation/bottom-tabs
npx expo install react-native-screens
npx expo install react-native-safe-area-context