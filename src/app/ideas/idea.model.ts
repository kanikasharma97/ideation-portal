export default class Idea {
  constructor(
    public title: string,
    public content: string,
    public createrInfo: { picture: { thumbnail: string }},
    public tags: string[]
  ) {}
}
