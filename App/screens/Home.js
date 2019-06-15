import React, { Component } from "react";
import { FlatList, Text, View, RefreshControl} from "react-native";
import { connect } from "react-redux";
import HTMLText from "react-htmltext";

import { Container } from "../components/Container";
import { connectAlert } from "../components/Alert";
import { Separator } from "../components/List";

import { getPosts } from "../actions/posts";

import {primaryColor} from '../config/colors'

class Home extends Component {

  handleLoadPosts = () => {
    if(this.props.isLoaded) return;
    this.props.dispatch(getPosts());
    console.log('load posts from site')
  }

  handleOnRefresh = () => {
    console.log('OnRefresh')
    this.handleLoadPosts()
  }

  componentWillMount() {
    this.handleLoadPosts()
    
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.currencyError &&
      nextProps.currencyError !== this.props.currencyError
    ) {
      this.props.alertWithType("error", "Error", nextProps.currencyError);
    }

    if(!nextProps.isLoaded){
      console.log('posts loaded')
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
            refreshControl={
              <RefreshControl
                //refresh control used for the Pull to Refresh
                progressBackgroundColor={primaryColor}
                refreshing={this.props.isLoaded}
                onRefresh={this.handleOnRefresh}
              />
            }
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
    postError: state.posts.error,
    isLoaded: state.posts.isLoaded,
  };
};

export default connect(mapStateToProps)(connectAlert(Home));
//export default connectAlert(Home);
//export default Home;
