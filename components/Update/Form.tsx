import { FC, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import {
  useForm,
  useController,
  Control,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRoutes, useTodoList } from "../../contexts";
import styleConstants from "../../styles.constants";
import { TodoItem } from "../../types/TodoItem";
import { RouteNames } from "../../types/Routes";

type InputProps = {
  placeholder?: string;
  name: string;
  control: Control;
  numberOfLines?: number;
};

const Input: FC<InputProps> = ({
  placeholder,
  name,
  control,
  numberOfLines = 1,
}) => {
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });
  return (
    <TextInput
      value={field.value}
      onChangeText={field.onChange}
      style={styles.input}
      placeholder={placeholder}
      numberOfLines={numberOfLines}
    />
  );
};

const DatePickerInput: FC<InputProps> = ({ name, control }) => {
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });

  return (
    <View>
      {field.value && <Text>selected: {field.value.toLocaleString()}</Text>}
      <DateTimePicker
        testID="dateTimePicker"
        value={field.value || new Date()}
        // @ts-ignore
        mode={"date"}
        // @ts-ignore
        is24Hour={true}
        onChange={field.onChange}
        display="inline"
      />
    </View>
  );
};

type FormData = {
  title: string;
  description: string;
  dateDue: Date;
};

const Form = () => {
  const { control, handleSubmit } = useForm();
  const { setRoute } = useRoutes();
  const { addTodo } = useTodoList();

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    addTodo(data as TodoItem);
    setRoute(RouteNames.list);
  };

  return (
    <View style={styles.form}>
      {/* FORM */}
      <Text style={styles.formTitle}>Create / Update Todo</Text>

      <Text style={styles.label}>Title</Text>
      <Input placeholder="add title" name="title" control={control} />
      <Text style={styles.label}>Description</Text>
      <Input
        placeholder="add description"
        name="description"
        control={control}
        numberOfLines={4}
      />
      <Text style={styles.label}>Date Due</Text>
      <DatePickerInput name="date" control={control} />
      <Button title="Add Todo" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  form: {
    // padding: 20,
    // flex: 0.5,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
    color: styleConstants.colors.primary,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: styleConstants.colors.primary,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: styleConstants.colors.primary,
    borderRadius: 5,
    padding: 10,
    width: 280,
    marginTop: 10,
    marginBottom: 20,
  },
  datePicker: {
    paddingLeft: 10,
    paddingTop: 10,
  },
});
