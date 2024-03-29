import { API_URL_USERS } from '.'

export const usersService = {
  async fetchUsers () {
    return await useApi()(API_URL_USERS.usersList)
  },
  async fetchProvinces () {
    return await useApi()(API_URL_USERS.provincesList)
  }
}
