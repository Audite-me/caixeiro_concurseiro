import { StyleSheet } from "react-native";
import { useState } from "react";

import { SafeAreaView as SafeAreaViewBase } from "react-native-safe-area-context";
import { TextInput } from "@/components/form/TextInput";
import { Check } from "@tamagui/lucide-icons";
import { Button, Checkbox, styled, Text, View, XStack, YStack } from "tamagui";

const StyledSafeAreaView = styled(SafeAreaViewBase, {
  flex: 1,
  paddingHorizontal: 24,
  alignContent: "center",
  justifyContent: "center",
  backgroundColor: "white",
});

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <StyledSafeAreaView>
      <View>
        <Text fontSize="$12" letterSpacing="$5" fow="700">
          Log in
        </Text>
        <YStack mt="$4" gap="$5">
          <YStack gap="$2">
            <Text fos="$6">E-mail</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
            />
          </YStack>
          <YStack gap="$2">
            <Text fos="$6">Password</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              placeholder="Password"
            />
          </YStack>
        </YStack>
        <XStack mt="$3" justifyContent="space-between" alignContent="center">
          <XStack gap="$2" alignContent="center">
            <Checkbox
              required
              size="$6"
              checked={checked}
              onCheckedChange={(e) => {
                e === true ? setChecked(true) : setChecked(false);
              }}
            >
              <Checkbox.Indicator>
                <Check />
              </Checkbox.Indicator>
            </Checkbox>
            <Text>Lembrar de mim</Text>
          </XStack>
          <Text fontWeight="700" letterSpacing="$1">
            Esqueceu a senha ?
          </Text>
        </XStack>
        <Button mt="$6">Entrar</Button>
      </View>
    </StyledSafeAreaView>
  );
}
