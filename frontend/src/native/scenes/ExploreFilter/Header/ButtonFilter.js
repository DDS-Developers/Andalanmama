/**
 * scenes/ExploreFilter/Header/ButtonFilter.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';
import { withFilter } from '../../../providers/Filter';
import ButtonIcon from '../../../components/ButtonIcon';
import ButtonNotif from './ButtonNotifWrapper';

export class ButtonFilter extends PureComponent {
  keywordInput = null;

  render() {
    const { selectedCategories } = this.props;

    return (
      <View style={{ position: 'relative' }}>
        <ButtonIcon
          iconType="FontAwesome"
          iconName="filter"
          handler={() => {
            this.props.setFilterDialog(true);
          }}
        />
        {selectedCategories.count() > 0 ? <ButtonNotif /> : null}
      </View>
    );
  }
}

ButtonFilter.propTypes = {
  selectedCategories: PropTypes.object,
  setFilterDialog: PropTypes.func,
};

export default withFilter(ButtonFilter);
