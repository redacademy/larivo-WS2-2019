import React, { useState, useEffect } from "react";
import styles from "./styles";
import readingTime from "reading-time";
import {
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Text
} from "react-native";
import StoryTitle from "../../components/StoryTitle";
import Paragraph from "../../components/Paragraph";

import { Header } from "../../components/Header";
import { useAuth } from "../../hooks";
import { FILTERED_STORIES } from "../../context/apollo";
import { useQuery } from "@apollo/react-hooks";
import { Spinner } from "../../components/Spinner";
import { NetWorkError } from "../../components/FourOhFour";
import { SearchTabs } from "../../navigation";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Conference Room",
    content: "some text"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Roaring Velvet"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "McLoving Fogell"
  }
];

separator = () => {
  return <View style={styles.separator} />;
};

const Activity = ({ navigation, route }) => {
  const [search, setSearch] = useState("");
  const { user } = useAuth();
  const { loading, error, data, refetch, fetchMore, networkStatus } = useQuery(
    FILTERED_STORIES
  );

  if (loading || typeof user === "undefined") return <Spinner />;
  if (error) return <NetWorkError />;

  const { userName } = user.user;

  function Item({ title, content }) {
    return (
      <View style={styles.item}>
        <StoryTitle>{title}</StoryTitle>
        <Paragraph>{content}</Paragraph>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        userName={userName}
        search={search}
        setSearch={setSearch}
      />
      {search.length ? (
        <SearchTabs route={route} navigation={navigation} search={search} />
      ) : (
        <View style={styles.cardContainer}>
          <StoryTitle>Resources</StoryTitle>
          <FlatList
            data={DATA}
            renderItem={({ item, content }) => (
              <TouchableOpacity>
                <Item title={item.title} content={item.content} />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={separator}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Activity;
