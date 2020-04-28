const dashboard = {
    index: 0,
    sidebar: [
        { id: 1, name: "หน้าหลัก", href: "/main" },
        { id: 2, name: "ด้านทั่วไป", href: "/main/people" },
        { id: 3, name: "ด้านสุขภาพ", href: "/main/hospital" },
        { id: 4, name: "ด้านสังคม", href: "/main/social" },
        { id: 5, name: "ด้านเศรษฐกิจ", href: "/main/economy" },
        { id: 6, name: "ด้านการช่วยเหลือ", href: "/main/service" },
    ]
}

export const dashboardReducer = (state = dashboard, action) => {
    switch (action.type) {
        case 'SET_KEY':
            return state = { ...state }
        default:
            return state
    }
} 