/**
 * scenes/MyRecipeCreate/Form.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-native';
import { View, Form } from 'native-base';
import { withMyRecipe } from '../../providers/MyRecipe';
import Pane from '../../components/Pane';
import Text from '../../components/Text';
import FieldText from '../../components/FieldText';
import FieldTextarea from '../../components/FieldTextarea';
import FieldPhoto from '../../components/FieldPhoto';
import FieldErrorInfo from '../../components/FieldErrorInfo';
import FieldTags from './FieldTags';
import FieldIngredients from './FieldIngredients';
import FieldSteps from './FieldSteps';
import FieldWrapper from './FieldWrapper';
import FormMainWrapper from './FormMainWrapper';

export class MyRecipeCreateForm extends PureComponent {
  componentWillUnmount() {
    this.props.resetData();
  }

  checkInputError = fieldName => {
    const { inputErrors } = this.props;
    let isError = false;
    if (inputErrors.get(fieldName)) {
      isError = true;
    }
    return isError;
  };

  render() {
    const { inputErrors, formData } = this.props;
    return (
      <Form>
        <FieldPhoto
          value={formData.get('photo')}
          onChange={(image, callback) => {
            this.props.changeFormData('photo', image.path);
            callback();
          }}
          onDelete={() => {
            this.props.changeFormData('photo', '');
          }}
          containerStyle={{ marginTop: 0, marginBottom: 0, height: 350 }}
          emptyStyle={{ width: '100%', height: 350, borderRadius: 0 }}
          photoContainerStyle={{ width: '100%', height: 350, borderRadius: 0 }}
          photoStyle={{ width: '100%', height: 350, borderRadius: 0 }}
        />
        <View style={{ marginTop: 10, marginLeft: 15 }}>
          <FieldErrorInfo message={this.props.inputErrors.get('photo')} bottom />
        </View>
        <FormMainWrapper>
          <FieldWrapper>
            <FieldText
              stackedLabel
              label="Judul Resep"
              placeholder="Resep..."
              value={formData.get('title')}
              error={this.checkInputError('title')}
              onChangeText={value => this.props.changeFormData('title', value)}
            />
            <View>
              <FieldErrorInfo message={inputErrors.get('title')} bottom />
            </View>
          </FieldWrapper>
          <FieldWrapper>
            <FieldTextarea
              stackedLabel
              label="Deskripsi"
              placeholder="Cerita Resep..."
              value={formData.get('description')}
              error={this.checkInputError('description')}
              onChangeText={value => this.props.changeFormData('description', value)}
            />
            <View>
              <FieldErrorInfo message={inputErrors.get('description')} bottom />
            </View>
          </FieldWrapper>
          <FieldWrapper>
            <FieldText
              stackedLabel
              label="Porsi"
              placeholder="Untuk Porsi..."
              value={formData.get('portion')}
              error={this.checkInputError('portion')}
              onChangeText={value => this.props.changeFormData('portion', value)}
            />
            <View>
              <FieldErrorInfo message={inputErrors.get('portion')} bottom />
            </View>
          </FieldWrapper>
          <FieldWrapper>
            <FieldText
              stackedLabel
              label="Durasi"
              placeholder="Lama Memasak Sekitar..."
              value={formData.get('duration')}
              error={this.checkInputError('duration')}
              onChangeText={value => this.props.changeFormData('duration', value)}
            />
            <View>
              <FieldErrorInfo message={inputErrors.get('duration')} bottom />
            </View>
          </FieldWrapper>
          <FieldWrapper>
            <FieldIngredients />
          </FieldWrapper>
          <FieldWrapper>
            <FieldSteps />
          </FieldWrapper>
          <FieldWrapper>
            <FieldTags />
          </FieldWrapper>
          <FieldWrapper>
            <Pane column start>
              <View>
                <Text style={{ fontWeight: 'bold' }}>Publikasikan</Text>
              </View>
              <Pane center>
                <Pane style={{ paddingRight: 20 }}>
                  <Text style={{ textAlign: 'left', color: '#777777' }}>
                    Dengan mengunggah resep ini, pengguna lain dapat melihat resep buatanmu
                  </Text>
                </Pane>
                <Switch
                  trackColor={{ false: '#bbbbbb', true: '#e83249' }}
                  thumbColor="#ffffff"
                  value={formData.get('publish')}
                  onValueChange={value => this.props.changeFormData('publish', value)}
                />
              </Pane>
            </Pane>
          </FieldWrapper>
        </FormMainWrapper>
      </Form>
    );
  }
}

MyRecipeCreateForm.propTypes = {
  inputErrors: PropTypes.object,
  formData: PropTypes.object,
  changeFormData: PropTypes.func,
  resetData: PropTypes.func,
};

export default withMyRecipe(MyRecipeCreateForm);
