//es reactivo, cuando se cambia el state se notifica a todos los componentes donde esten escuchando los cambios del state
export default () => ({
    isLoading:true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: "Qui amet officia incididunt aliqua ad nisi ipsum nulla aliquip dolore sunt cupidatat aliqua.",
            picture: null,
        },
        {
            id: new Date().getTime() + 100,
            date: new Date().toDateString(),
            text: "Commodo enim laboris exercitation sint fugiat amet excepteur dolor est sint. Et adipisicing adipisicing velit sit dolore sint laborum officia mollit consectetur. Nulla occaecat ex esse sint mollit laborum enim irure reprehenderit ea irure esse ex sit. Magna id occaecat labore id consequat amet exercitation Lorem incididunt cupidatat culpa. Irure officia velit qui non voluptate ad ad reprehenderit et aliquip velit Lorem. Exercitation elit aliquip ipsum et pariatur.",
            picture: null,
        },
        {
            id: new Date().getTime() + 200,
            date: new Date().toDateString(),
            text: "Aliquip elit ea elit cupidatat enim dolor labore culpa esse in ad sit nisi. Velit sit non quis pariatur. Dolor consequat do officia eu mollit cupidatat anim officia enim. Id do consequat tempor cillum excepteur reprehenderit velit. Et ut velit sunt occaecat dolore esse veniam. Aute consectetur dolore ullamco ea voluptate cupidatat ipsum ea sint et nulla mollit. Consectetur consequat elit officia nulla ex aliquip ex.",
            picture: null,
        }
    ]
})