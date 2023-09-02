export const structure = (S: any) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Blog")
        .child(
          S.list()
            .title("Blog")
            .items([
              S.listItem().title("Posts").child(S.documentTypeList("post")),
            ])
        ),
    ]);
