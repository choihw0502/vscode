const appList = [
  {
    app_cd: 'CMS',
    app_nm: '시스템관리',
    del_yn: 'N',
    app_order: 1,
    reg_date: '2021-08-14T00:17:21.745Z',
    regr_id: 'TAKE',
    mdf_date: '2022-08-19T08:29:57.431Z',
    mdfr_id: '테이크솔루션'
  },
  {
    app_cd: 'AIF',
    app_nm: 'AI통합플랫폼',
    del_yn: 'N',
    app_order: 2,
    reg_date: '2023-01-19T01:15:10.390Z',
    regr_id: '테이크솔루션',
    mdf_date: '2023-01-19T01:15:10.390Z',
    mdfr_id: '테이크솔루션'
  },
  {
    app_cd: 'test',
    app_nm: 'alpha_output/1',
    del_yn: 'N',
    app_order: 999,
    reg_date: '2023-02-03T04:57:06.002Z',
    regr_id: '관리자',
    mdf_date: '2023-02-03T04:57:06.002Z',
    mdfr_id: '관리자'
  }
]

export function getApps() {
  return appList
}
