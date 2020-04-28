const dashboard = {
    index: "0",
    sidebar: [
        { id: 0, name: "หน้าหลัก", href: "/main" },
        { id: 1, name: "ด้านทั่วไป", href: "/main/people" },
        { id: 2, name: "ด้านสุขภาพ", href: "/main/hospital" },
        { id: 3, name: "ด้านสังคม", href: "/main/social" },
        { id: 4, name: "ด้านเศรษฐกิจ", href: "/main/economy" },
        { id: 5, name: "ด้านการช่วยเหลือ", href: "/main/service" },
    ]
}

export const dashboardReducer = (state = dashboard, action) => {
    switch (action.type) {
        case 'SET_KEY':
            return state = { ...state, index: action.index.toString() }
        default:
            return state
    }
} 