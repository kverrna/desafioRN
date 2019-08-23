
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

const getIssuesOpen = async (organization, repositorieName) => {
  try {
    const url = `${mainUrl}/${organization}/${repositorieName}/issues?state=open`;
    const response = await fetch(url);
    const json = await response.json();
    if (response.ok) { return { success: true, issues: json }; }
    return { success: false, msg: json.message };
  } catch (error) {
    return { success: false, msg: `Não foi possível baixar as issues abertas do repositório ${repositorieName}` };
  }
};
const getIssuesClosed = async (organization, repositorieName) => {
  try {
    const url = `${mainUrl}/${organization}/${repositorieName}/issues?state=closed`;
    const response = await fetch(url);
    const json = await response.json();
    if (response.ok) { return { success: true, issues: json }; }
    return { success: false, msg: json.message };
  } catch (error) {
    return { success: false, msg: `Não foi possível baixar as issues fechadas do repositório ${repositorieName}` };
  }
};
export {
  getIssuesOpen,
  getIssuesClosed,
  getRepositories
};
