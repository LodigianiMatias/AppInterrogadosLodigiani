import {
  Alert,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Incrementar, Perder } from "../../game/actions";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { generateRandomNumberBetween } from "../../utils/functions";
import { styles } from "./styles";

const QuestionItem = ({ item, navigation }) => {
  const dispatch = useDispatch();
  const contador = useSelector((state) => state.number.numero);

  const inOrderQuestion = generateRandomNumberBetween(1, 3);

  const onCorrect = () => {
    dispatch(Incrementar());
    if (contador == 4) {
      navigation.navigate("EndGame");
    } else {
      navigation.navigate("NextQuestion");
    }
  };

  const onIncorrect = () => {
    dispatch(Perder());
    navigation.navigate("TryAgain");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.contentContainer}>
        <Text style={styles.title}>{item.question}</Text>
      </TouchableOpacity>

      <View>
        <Image source={{ uri: item.img }} style={styles.image} />
      </View>

      {/* <TouchableOpacity style={styles.answersContainer} onPress={onCorrect}>
                <Text style={styles.correct}>◉ {item.correct}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.answersContainer} onPress={onIncorrect}>
                <Text style={styles.wrong}>◉ {item.wrong}</Text>
            </TouchableOpacity> */
        }

      <View style={styles.preview}>
        {inOrderQuestion == 1 ? (
          <View>
            <TouchableOpacity
              style={styles.answersContainer}
              onPress={onCorrect}
            >
              <Text style={styles.correct}>◉ {item.correct}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.answersContainer}
              onPress={onIncorrect}
            >
              <Text style={styles.wrong}>◉ {item.wrong}</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity
              style={styles.answersContainer}
              onPress={onIncorrect}
            >
              <Text style={styles.wrong}>◉ {item.wrong}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.answersContainer}
              onPress={onCorrect}
            >
              <Text style={styles.correct}>◉ {item.correct}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default QuestionItem;
