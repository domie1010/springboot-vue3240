const base = {
    get() {
        return {
            url : "http://localhost:8080/xinliyuyuezixunguanlixitong/",
            name: "xinliyuyuezixunguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xinliyuyuezixunguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "心理预约咨询管理系统"
        } 
    }
}
export default base
