import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Container, Text, Button, View, Icon, Spinner, Form, Textarea } from 'native-base';
import { ScrollView, Modal, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { withAuth } from '../../providers/Auth';
import { withComments } from '../../providers/Comments';
import Header from '../../components/Header';
import InputComment from './InputComment';
import Dialog from '../../components/Dialog';
import ButtonText from '../../components/Dialog/Button';
import ListComment from '../RecipeDetail/Comments/ListComment';
import LoaderWrapper from './Wrapper';
import FieldErrorInfo from '../../components/FieldErrorInfo';
import defaultProfile from './baseline_person.png';

/* eslint-disable react/prefer-stateless-function */
export class RecipeComment extends PureComponent {
  static navigationOptions = {
    title: 'Komentar',
    header: null,
  };

  state = {
    showDeleteConfirm: false,
    deletedId: 0,
    modalVisible: false,
    profile: '',
  };

  componentDidMount() {
    const { route } = this.props;
    const { id } = route.params;

    if (id) {
      this.props.loadComments(id);
    }
  }

  loader() {
    const { loadingComments } = this.props;
    if (loadingComments) {
      return (
        <LoaderWrapper>
          <Spinner color="#888888" />
        </LoaderWrapper>
      );
    }
    return null;
  }

  emptyComments = () => (
    <View style={{ paddingTop: 20 }}>
      <Text style={{ fontSize: 12, textAlign: 'center' }}>Belum Ada Komentar</Text>
    </View>
  );

  renderEditComment = () => {
    const { deletedId, profile } = this.state;
    const { inputErrors } = this.props;

    return (
      <Modal
        animationType="slide"
        transparent
        visible={this.state.modalVisible}
        onRequestClose={() => {
          console.warn('Modal has been closed.');
        }}
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, .4)' }}>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              flex: 1,
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: 5,
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(131, 131, 131, .25)',
              }}
            >
              <Button
                style={{ width: 45 }}
                transparent
                onPress={() => {
                  this.setState({
                    modalVisible: false,
                  });
                }}
              >
                <Icon
                  style={{ color: '#E83249', marginLeft: 0, marginRight: 0 }}
                  type="MaterialIcons"
                  name="arrow-back"
                />
              </Button>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#E83249',
                  marginRight: 45,
                  flex: 1,
                }}
              >
                Ubah Komentar
              </Text>
            </View>
            <View
              style={{
                paddingTop: 15,
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}
            >
              {profile && profile.image ? (
                <Image
                  style={{ width: 40, height: 40, borderRadius: 40, marginRight: 15 }}
                  source={{ src: profile.image }}
                  resizeMode="cover"
                />
              ) : (
                <Image
                  style={{ width: 40, height: 40, borderRadius: 40, marginRight: 15 }}
                  source={defaultProfile}
                  resizeMode="cover"
                />
              )}
              <Form style={{ flex: 1, flexDirection: 'column' }}>
                <Textarea
                  placeholder="Tambahkan Komentar…"
                  style={{
                    fontSize: 13,
                    height: 40,
                    borderWidth: 1,
                    borderColor: '#f4f4f4',
                    borderRadius: 6,
                    paddingVertical: 10,
                  }}
                  value={this.props.bodyComment}
                  error={this.checkInputError('bodyComment')}
                  onChangeText={value => this.props.changeBodyComment(value)}
                />
                <View>
                  <FieldErrorInfo message={inputErrors.get('bodyComment')} bottom />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    marginTop: 20,
                  }}
                >
                  <Button
                    style={{ marginRight: 15 }}
                    small
                    light
                    onPress={() => {
                      this.setState({
                        modalVisible: false,
                      });
                    }}
                  >
                    <Text style={{ fontSize: 12, textTransform: 'capitalize' }}> Batal </Text>
                  </Button>
                  {this.checkInputError('bodyComment') ? (
                    <Button small disabled>
                      <Text style={{ fontSize: 12, textTransform: 'capitalize' }}>Perbaharui</Text>
                    </Button>
                  ) : (
                    <Button
                      style={{ backgroundColor: '#E83249' }}
                      light
                      small
                      onPress={() => {
                        this.setState({
                          modalVisible: false,
                        });
                        this.props.updateComment(deletedId);
                      }}
                    >
                      <Text style={{ color: '#ffffff', fontSize: 12, textTransform: 'capitalize' }}>
                        Perbaharui
                      </Text>
                    </Button>
                  )}
                </View>
              </Form>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  notLoggedIn = () => {
    const { navigation } = this.props;
    return (
      <View
        style={{
          backgroundColor: '#efefef',
          paddingVertical: 15,
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomColor: 'rgba(131, 131, 131, .25)',
          borderBottomWidth: 1,
        }}
      >
        <Text style={{ fontSize: 10, paddingRight: 10 }}>
          Login untuk dapat meninggalkan komentar
        </Text>
        <Button
          block
          style={{
            height: 28,
            width: 84,
            borderRadius: 12,
            paddingTop: 0,
            paddingBottom: 0,
            backgroundColor: '#E83249',
          }}
          onPress={() => navigation.navigate('Login')}
        >
          <Text
            uppercase={false}
            style={{
              fontSize: 12,
              paddingLeft: 0,
              paddingRight: 0,
              width: '100%',
              textAlign: 'center',
              lineHeight: 12,
            }}
          >
            Login
          </Text>
        </Button>
      </View>
    );
  };

  commentPaginations = () => {
    const { comments } = this.props;
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {comments.get('current_page') === 1 ? (
          <Icon
            type="MaterialIcons"
            name="keyboard-arrow-left"
            style={{
              color: 'rgba(232, 50, 73, .45)',
              marginHorizontal: 16,
            }}
          />
        ) : (
          <Button transparent onPress={() => this.props.loadPrevPage()}>
            <Icon
              type="MaterialIcons"
              name="keyboard-arrow-left"
              style={{
                color: '#E83249',
              }}
            />
          </Button>
        )}

        <Text
          style={{
            color: 'rgba(0, 0, 0, .5)',
            fontSize: 10,
          }}
        >
          {comments.get('from')}-{comments.get('to')} /
          {comments.get('total') > 0 ? comments.get('total') : '-'}
        </Text>
        {comments.get('current_page') === comments.get('last_page') ? (
          <Icon
            type="MaterialIcons"
            name="keyboard-arrow-right"
            style={{
              color: 'rgba(232, 50, 73, .45)',
              marginHorizontal: 16,
            }}
          />
        ) : (
          <Button transparent onPress={() => this.props.loadNextPage()}>
            <Icon
              type="MaterialIcons"
              name="keyboard-arrow-right"
              style={{
                color: '#E83249',
              }}
            />
          </Button>
        )}
      </View>
    );
  };

  renderDeleteConfirm = () => {
    const { showDeleteConfirm, deletedId } = this.state;

    return (
      <Dialog
        visible={showDeleteConfirm}
        title="Are You Sure?"
        message="Yakinkah anda akan menghapus resep ini?"
        actions={
          <React.Fragment>
            <ButtonText
              onPress={() => {
                this.setState({
                  showDeleteConfirm: false,
                });
              }}
            >
              Batal
            </ButtonText>
            <ButtonText
              onPress={() => {
                this.setState({
                  showDeleteConfirm: false,
                });
                this.props.deleteComment(deletedId);
              }}
            >
              Lanjutkan
            </ButtonText>
          </React.Fragment>
        }
      />
    );
  };

  checkInputError = fieldName => {
    const { inputErrors } = this.props;
    let isError = false;
    if (inputErrors.get(fieldName)) {
      isError = true;
    }
    return isError;
  };

  recentComments = () => {
    const { comments, commentsData } = this.props;
    return (
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: '#efefef',
            padding: 20,
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              paddingBottom: 15,
              fontSize: 12,
              textAlign: 'center',
              borderBottomColor: 'rgba(131, 131, 131, .25)',
              borderBottomWidth: 1,
            }}
          >
            Terbaru
          </Text>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              <ScrollView>
                {comments && comments.count() > 0 ? (
                  <>
                    {commentsData.count() > 0 ? (
                      <>
                        {commentsData.map(comment => (
                          <ListComment
                            onDelete={id => {
                              this.setState({
                                showDeleteConfirm: true,
                                deletedId: id,
                              });
                            }}
                            onEdit={(id, text, profile) => {
                              this.setState({
                                modalVisible: true,
                                deletedId: id,
                                profile,
                              });
                              this.props.setBodyComment(text);
                            }}
                            comment={comment}
                            key={`comment-${comment.get('id')}`}
                          />
                        ))}
                      </>
                    ) : (
                      this.emptyComments()
                    )}
                  </>
                ) : null}
              </ScrollView>
            </View>
            {comments && comments.count() > 0 ? (
              <>{commentsData.count() > 0 ? this.commentPaginations() : null}</>
            ) : null}
            {this.loader()}
          </View>
        </View>
      </>
    );
  };

  render() {
    const { loggedIn } = this.props;

    return (
      <Container>
        <Header title="Komentar" leftSettings={{ type: 'back' }} />
        <View style={{ position: 'relative', flex: 1 }}>
          {loggedIn ? <InputComment loggedIn={loggedIn} /> : this.notLoggedIn()}
          {this.recentComments()}
          {this.renderDeleteConfirm()}
          {this.renderEditComment()}
        </View>
      </Container>
    );
  }
}

RecipeComment.propTypes = {
  loggedIn: PropTypes.bool,
  navigation: PropTypes.object,
  route: PropTypes.object,
  loadComments: PropTypes.func,
  loadNextPage: PropTypes.func,
  loadPrevPage: PropTypes.func,
  deleteComment: PropTypes.func,
  comments: PropTypes.object,
  commentsData: PropTypes.object,
  loadingComments: PropTypes.bool,
  setBodyComment: PropTypes.func,
  updateComment: PropTypes.func,
  changeBodyComment: PropTypes.func,
  bodyComment: PropTypes.string,
  inputErrors: PropTypes.object,
};

const NavigationWrapper = props => {
  const navigation = useNavigation();
  const route = useRoute();

  return <RecipeComment {...props} navigation={navigation} route={route} />;
};

export default compose(
  withAuth,
  withComments,
)(NavigationWrapper);
