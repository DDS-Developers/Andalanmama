/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { View, Text, H2, Button, Icon } from 'native-base';
import { withRecipe } from '../../../providers/Recipe';
import CommentsWrapper from './CommentsWrapper';
import ContentWrapper from './ContentWrapper';
import ListComment from './ListComment';

const Comments = ({ recipeDetailComments, recipeId, onDelete, onEdit }) => {
  const navigation = useNavigation();

  return (
    <ContentWrapper>
      <CommentsWrapper>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: 'rgba(131, 131, 131, .25)',
            borderBottomWidth: 1,
            paddingBottom: 5,
          }}
        >
          <H2
            style={{
              color: '#E83249',
              fontSize: 13,
              fontWeight: 'bold',
              flex: 1,
            }}
          >
            Komentar
          </H2>
          <Button
            iconRight
            transparent
            style={{
              color: '#E83249',
              paddingTop: 0,
              paddingBottom: 0,
              height: 'auto',
            }}
            onPress={() => navigation.navigate('RecipeComment', { id: recipeId })}
          >
            <Text
              style={{
                color: '#E83249',
                paddingRight: 0,
                textTransform: 'capitalize',
                fontSize: 10,
                lineHeight: 10,
                textDecorationLine: 'underline',
                textDecorationColor: '#E83249',
              }}
            >
              Lihat komentar lain
            </Text>
            <Icon
              type="MaterialIcons"
              name="chevron-right"
              style={{
                color: '#E83249',
                marginRight: 0,
              }}
            />
          </Button>
        </View>

        {recipeDetailComments && recipeDetailComments.count() > 0 ? (
          <React.Fragment>
            {recipeDetailComments.map(comment => (
              <ListComment
                onDelete={onDelete}
                onEdit={onEdit}
                comment={comment}
                key={`comment-${comment.get('id')}`}
              />
            ))}
          </React.Fragment>
        ) : (
          <View style={{ paddingTop: 20 }}>
            <Text style={{ fontSize: 12, textAlign: 'center' }}>Belum Ada Komentar</Text>
          </View>
        )}
      </CommentsWrapper>
    </ContentWrapper>
  );
};

Comments.propTypes = {
  recipeDetailComments: PropTypes.object,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  recipeId: PropTypes.number,
};

export default withRecipe(Comments);
