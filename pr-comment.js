const { REPO_OWNER, REPO_SIGNOZ_CODE, REPO_SIGNOZ_DOCS, BOT_DOCS_COMMENT } = require('./constants')
const ghapi = require('./githubapi').default

try {
    ghapi.request('POST /repos/{owner}/{repo}/issues/{issue_number}/comments', {
        owner: REPO_OWNER,
        repo: REPO_SIGNOZ_CODE,
        issue_number: `${pr_number}`,
        body: BOT_DOCS_COMMENT
    }).then(resp => console.log(resp)).catch(e => console.error(e))
}
catch (e) {
    console.error(e)
}
