export const structure = (S: any) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Pages")
        .child(
          S.list()
            .title("Pages Documents")
            .items([
              S.listItem().title("Post").child(S.documentTypeList("post")),
            ])
        ),
      S.listItem()
        .title("Blog")
        .child(
          S.list()
            .title("Blog")
            .items([
              S.listItem().title("Post").child(S.documentTypeList("post")),
            ])
        ),
    ]);
