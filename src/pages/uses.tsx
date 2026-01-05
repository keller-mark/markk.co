import { Link } from 'waku';

export default async function UsesPage() {
  const data = await getData();

  return (
    <div className="padded-content">
      <title>{data.title}</title>
      <p>A (non-exhaustive) list of tools and software that I am currently using.</p>
      <ul>
        <li>macOS</li>
        <li><a href="https://workflowy.com/">Workflowy</a>: For note-taking.</li>
        <li><a href="https://soundcloud.com/keller-mark-7">SoundCloud</a>: For music listening and discovery.</li>
        <li>VSCode and Zed: For text editing and writing code.</li>
        <li>React: For web development.</li>
        <li>Zotero+Overleaf: For reference management and paper writing. (Paperpile+GDocs when working with non-CS collaborators.)</li>
        <li>iTerm2 + oh-my-zsh or Starship</li>
        <li>Figma</li>
        <li>Screen Studio</li>
        <li>eReader + Goodreads</li>
      </ul>
      <p>Inspired by <a href="https://github.com/wesbos/awesome-uses">awesome-uses</a>.</p>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: '/uses | Mark',
    headline: 'Uses page',
    body: 'Some uses page contents here...',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
