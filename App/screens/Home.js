import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { connect } from "react-redux";
import HTMLText from "react-htmltext";

import { Container } from "../components/Container";
import { connectAlert } from "../components/Alert";
import { Separator } from "../components/List";

import { getPosts } from "../actions/posts";

class Home extends Component {
  componentWillMount() {
    this.props.dispatch(getPosts());
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.currencyError &&
      nextProps.currencyError !== this.props.currencyError
    ) {
      this.props.alertWithType("error", "Error", nextProps.currencyError);
    }
  }

  render() {
    console.log(this.props.posts.length);
    return (
      <Container>
        {this.props.posts.length > 0 ? (
          <FlatList
            data={this.props.posts}
            renderItem={({ item }) => (
              <View style={{marginVertical: 10, paddingHorizontal: 10}}>
                <HTMLText html={item.elementPureHtml} />
              </View>
            )}
            keyExtractor={item => item.elementPureHtml}
            ItemSeparatorComponent={Separator}
          />
        ) : (
          <Text>List is empty</Text>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    postError: state.posts.error
  };
};

export default connect(mapStateToProps)(connectAlert(Home));
//export default connectAlert(Home);
//export default Home;
