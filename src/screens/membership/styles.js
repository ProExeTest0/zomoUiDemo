import {StyleSheet} from 'react-native';
import {colors} from '../../helpers/colors';
import {hp, wp} from '../../helpers/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  appBar: {
    height: hp(50),
    backgroundColor: colors.appColor,
    justifyContent: 'center',
  },
  appBarHeader: {
    color: colors.white,
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    alignContent: 'center',
  },
  appIcon: {
    height: hp(15),
    width: wp(15),
    tintColor: colors.white,
    marginLeft: 10,
    position: 'absolute',
  },
  memberInputText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    marginTop: hp(20),
  },
  input: {
    borderColor: 'gray',
    width: '100%',
    borderWidth: 1,
    borderRadius: 6,
    padding: 5,
    color: colors.white,
    marginTop: hp(10),
    textAlignVertical: 'top',
  },

  selctedBox: {
    backgroundColor: colors.primary162523,
    marginTop: hp(10),
    marginBottom: hp(10),
    alignSelf: 'flex-start',
    borderRadius: 14,
    borderWidth: wp(1),
    borderColor: colors.primary192726,
  },

  subSelectedBox: {
    backgroundColor: colors.primary162523,
    borderRadius: 14,
    paddingHorizontal: hp(12),
    margin: hp(2),
  },

  subSelectedBoxText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '500',
    marginVertical: hp(8),
    marginHorizontal: wp(10),
  },

  noClassBox: {
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.grey92A7A9,
    marginTop: 10,
    paddingRight: 15,
  },

  updowniconBox: {
    height: 12,
    width: 12,
    tintColor: colors.white,
  },
  expiresMainBox: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  expiresDataBox: {
    borderRadius: 10,
    height: 30,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: hp(2),
  },
  noMembershipBox: {
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(90),
    padding: 5,
    borderWidth: 1,
    borderColor: colors.grey92A7A9,
    marginTop: hp(10),
  },
  membershipBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  memberText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  popIconBox: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    color: colors.white,
  },
  popupHeaderText: {
    color: colors.white,
    marginBottom: hp(30),
    textAlign: 'center',
    marginTop: hp(18),
    fontSize: 12,
  },
});
