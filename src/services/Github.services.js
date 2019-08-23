
const mainUrl = 'https://api.github.com/repos';

const getRepositories = async (organization, repositorieName) => {
  try {
    const url = `${mainUrl}/${organization}/${repositorieName}`;
    const response = await fetch(url);
    const json = await response.json();
    if (response.ok) { return { success: true, ...json }; }
    return { success: false, msg: json.message };
  } catch (error) {
    return { success: false, msg: `Não foi possível baixar as informações de ${organization}` };
  }
};

const getIssues = async (organization, repositorieName) => {
  try {
    const url = `${mainUrl}/${organization}/${repositorieName}/issues`;
    const response = await fetch(url);
    const json = await response.json();
    if (response.ok) { return { success: true, ...json }; }
    return { success: false, msg: json.message };
  } catch (error) {
    return { success: false, msg: `Não foi possível baixar as issues do repositório ${repositorieName}` };
  }
};
export {
  getIssues,
  getRepositories
};
