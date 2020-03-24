import React, { useState, useEffect } from "react";
import styles from "./styles";
import readingTime from "reading-time";
import {
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { StoryCard } from "../../components/StoryCard";
import { Header } from "../../components/Header";
import Hashtag from "../../components/Hashtag";
import { useAuth } from "../../hooks";
import { FILTERED_STORIES } from "../../context/apollo";
import { useQuery } from "@apollo/react-hooks";
import { Spinner } from "../../components/Spinner";
import { NetWorkError } from "../../components/FourOhFour";
import { SearchTabs } from "../../navigation";

const Activity = ({ navigation, route }) => {
  const [search, setSearch] = useState("");
  const { user } = useAuth();
  const { loading, error, data, refetch, fetchMore, networkStatus } = useQuery(
    FILTERED_STORIES
  );

  if (loading || typeof user === "undefined") return <Spinner />;
  if (error) return <NetWorkError />;

  const { userName } = user.user;

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
        <View style={styles.listView}>
          <FlatList
            // ListHeaderComponent={() => (
            //   <Text style={styles.title}>Featured</Text>
            // )}
            // refreshing={networkStatus === 4}
            // onRefresh={() => refetch()}
            // onEndReached={() =>
            //   fetchMore({
            //     updateQuery: (prev, {fetchMoreResult}) => {
            //       if (!fetchMoreResult) return prev
            //       return Object.assign({}, prev, {
            //         userFeed: [
            //           ...prev.userFeed,
            //           ...fetchMoreResult.userFeed,
            //         ],
            //       })
            //     },
            //   })
            // }
            data={data.filteredStories}
            renderItem={({
              item: { id, author, title, createdAt, content, hashtags }
            }) => {
              const { text: readTime } = readingTime(content);
              return (
                <TouchableOpacity
                  style={styles.cardContainer}
                  onPress={() => navigation.navigate("HomeStory", { id })}
                >
                  <StoryCard
                    userName={author.userName}
                    createdAt={createdAt}
                    readTime={readTime}
                    title={title}
                    content={content}
                    hashtags={hashtags}
                    bookmarked={null}
                  />
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Activity;
