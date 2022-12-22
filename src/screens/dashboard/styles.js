import {StyleSheet} from 'react-native';
import {hp, wp} from '../../helpers/constants';
import {colors} from '../../helpers/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  rowFlex: {
    flexDirection: 'row',
  },
  appBarBox: {
    height: hp(100),
    backgroundColor: colors.appColor,
    justifyContent: 'flex-end',
  },
  appItemRow: {
    flexDirection: 'row',
    marginBottom: hp(10),
  },

  profileImgContainer: {
    marginLeft: wp(16),
    height: hp(80),
    width: wp(80),
  },
  profileImg: {
    marginLeft: wp(18),
    height: hp(58),
    width: wp(58),
    borderRadius: wp(40),
    borderColor: colors.green31524D,
    borderWidth: wp(2),
  },
  userNameText: {
    color: colors.white,
    marginLeft: wp(7),
    fontSize: wp(18),
    fontWeight: '600',
  },
  linkText: {
    color: colors.white,
    fontSize: wp(12),
    marginHorizontal: wp(4),
  },
  copyIcon: {
    height: hp(14),
    width: wp(14),
    tintColor: colors.green41C094,
  },
  linkBackground: {
    backgroundColor: colors.green184A3F,
    borderRadius: 3,
    marginLeft: wp(6),
    marginRight: wp(8),
    marginTop: wp(3),
  },
  linkRow: {
    flexDirection: 'row',
    marginTop: hp(4),
    alignItems: 'center',
  },
  headreText: {
    color: colors.white,
    fontSize: wp(18),
    fontWeight: '600',
  },
  mainStyleBox: {
    paddingHorizontal: hp(16),
    width: '100%',
  },
  headerTexRow: {
    flexDirection: 'row',
    marginTop: hp(20),
  },
  commonRowBox: {
    flexDirection: 'row',
    marginTop: hp(20),
  },

  multiCardBox: {
    borderRadius: hp(10),
    paddingLeft: wp(10),
    paddingRight: wp(4),
    paddingTop: hp(20),
    paddingBottom: hp(3),
    flex: 1,
  },

  cardText: {
    fontSize: hp(15),
    color: colors.white,
    fontWeight: '500',
  },
  cardItemImage: {
    height: hp(30),
    width: wp(30),
    tintColor: colors.white,
    elevation: 10,
    shadowColor: colors.black,
  },
  cardItemSubImage: {
    height: hp(12),
    width: wp(12),
    tintColor: colors.white,
    alignSelf: 'flex-end',
    margin: hp(6),
    elevation: hp(10),
  },
  subIconBox: {
    backgroundColor: colors.black,
    borderRadius: 5,
    opacity: 0.5,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  headreText2: {
    color: colors.white,
    fontSize: 14,
    marginTop: hp(20),
    fontWeight: '500',
  },
  rowStyle: {
    flexDirection: 'row',
    padding: wp(8),
    justifyContent: 'space-between',
  },
  textBox: {
    color: colors.grey92A7A9,
    fontSize: hp(12),
    marginBottom: hp(6),
  },
  subTextBox: {
    color: colors.green47D2A0,
    fontSize: 20,
    fontWeight: 'bold',
  },
  columnDivider: {
    height: hp(15),
    width: wp(1),
    backgroundColor: '#7C8F91',
    alignSelf: 'center',
  },
  infoRowBox: {
    backgroundColor: colors.darkGreen,
    padding: wp(10),
    marginTop: hp(10),
  },

  viewallText: {
    color: colors.green,
    fontSize: hp(16),
    fontWeight: '500',
  },
  commonCardBox: {
    backgroundColor: colors.lightGreen,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.green31524D,
    flexDirection: 'row',
    marginBottom: 20,
  },

  postImage: {
    height: hp(60),
    width: wp(50),
    borderRadius: 12,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  postMainText: {
    color: colors.white,
    fontSize: 14,
    marginTop: hp(15),
    fontWeight: '500',
  },
  postSubText: {
    color: colors.grey92A7A9,
    fontSize: 13,
    marginLeft: 8,
    fontWeight: '500',
  },
  postAmountBox: {
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 10,
    position: 'absolute',
    right: 0,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
});
