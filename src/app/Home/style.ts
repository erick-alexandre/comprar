import { StyleSheet } from 'react-native';


export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d0d2d8',
    paddingTop: 62
  },
  logo: {
    height: 34,
    width: 134
  },
  form: {
    width: '100%',
    gap: 8,
    paddingHorizontal: 16,
    marginTop: 32
  },
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    padding: 24,
    marginTop: 24
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EC',
    paddingBottom: 12
  },
  clearButton: {
    marginLeft: 'auto'
  },
  clearText: {
    fontSize: 12,
    color: '#828282',
    fontWeight: '600'
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#EEF0F5',
    marginVertical: 16
  },
  listContent: {
    paddingTop: 16,
    paddingBottom: 22
  },
  empty: {
    fontSize: 14,
    color: '#828282',
    fontWeight: '600',
    textAlign: 'center'
  }
})