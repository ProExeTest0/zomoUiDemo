import {StyleSheet} from 'react-native';
import {colors} from '../../helpers/colors';
import {hp, wp} from '../../helpers/constants';

export const styles = StyleSheet.create({
  selctedBox: {
    backgroundColor: colors.primary162523,
    marginTop: hp(30),
    marginBottom: hp(10),
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    borderWidth: wp(1),
    borderColor: colors.primary192726,
  },
  subSelectedBox: {
    backgroundColor: colors.primary162523,
    borderRadius: 10,
    paddingHorizontal: hp(20),
    margin: hp(2),
  },
  subSelectedBoxText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '500',
    marginVertical: hp(8),
    marginHorizontal: wp(15),
  },

  mainCardHeader: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: wp(40),
  },
  imageBox: {
    height: hp(200),
    width: '100%',
  },

  text1: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  text2: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '400',
  },

  text3: {
    color: colors.white,
    fontSize: 16,
    opacity: 0.8,
    paddingRight: wp(10),
    paddingLeft: wp(20),
  },
  text4: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    paddingRight: wp(10),
  },
  text5: {
    color: colors.green,
    fontSize: 14,
    paddingHorizontal: 15,
    paddingVertical: 4,
    fontWeight: '600',
  },

  subText: {
    fontSize: 15,
    color: colors.white,
    opacity: 0.6,
    alignSelf: 'center',
  },
  amountText: {
    color: colors.white,
    fontSize: 19,
    fontWeight: '600',
  },

  columnDivider: {
    height: hp(25),
    width: wp(2),
    backgroundColor: '#7C8F91',
    alignSelf: 'center',
  },
  amountBox: {
    backgroundColor: colors.blackTransprant,
    paddingHorizontal: wp(10),
    paddingVertical: hp(1),
    borderRadius: 5,
  },
  bottomHeader: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
  countBox: {
    backgroundColor: colors.blackTransprant,
    borderRadius: 5,
  },
  emptyBox: {
    height: hp(200),
    alignSelf: 'center',
    marginTop: hp(50),
    marginBottom: hp(10),
    width: '100%',
    opacity: 0.5,
  },
  emptyText: {
    color: colors.green,
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: 50,
    opacity: 0.5,
    fontWeight: '500',
  },
});
