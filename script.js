/* ============================================================
   Git, GitHub & CI/CD Tutorial — Interactive Script
   ============================================================ */

const SECTIONS = [
  { id: 'prerequisites', label: '1. Prerequisites & Setup' },
  { id: 'cicd-intro', label: '2. CI/CD: The Big Picture' },
  { id: 'git-basics', label: '3. Git: Version Control Basics' },
  { id: 'github-essentials', label: '4. GitHub Essentials' },
  { id: 'repositories', label: '5. Working with Repositories' },
  { id: 'branching', label: '6. Branching & Collaboration' },
  { id: 'pull-requests', label: '7. Pull Requests & Code Review' },
  { id: 'actions-intro', label: '8. Introduction to GitHub Actions' },
  { id: 'ci-pipelines', label: '9. Building CI Pipelines' },
  { id: 'cd-deployment', label: '10. CD, Deployment & Pages' },
];

const MCQS = {
  prerequisites: [
    {
      q: 'What is the primary purpose of installing Git on your computer?',
      options: ['To track changes to your code locally', 'To deploy websites automatically', 'To browse GitHub in a browser', 'To write code with syntax highlighting'],
      answer: 0,
      explanation: 'Git is version control software that runs locally on your machine. It tracks file changes, creates commits, and manages history. Browsing GitHub, deploying sites, and syntax highlighting are handled by other tools.',
    },
    {
      q: 'Which command verifies that Git is installed correctly?',
      options: ['git check', 'git --version', 'git install', 'git start'],
      answer: 1,
      explanation: '`git --version` prints the installed Git version. If Git is not installed, your terminal will report that the command was not found.',
    },
    {
      q: 'Why does Git need your name and email configured?',
      options: ['To enable GitHub Actions', 'To encrypt your repository', 'To label your commits with authorship', 'To log into GitHub automatically'],
      answer: 2,
      explanation: 'Every commit records who made it. Git uses `user.name` and `user.email` from your global config to stamp each commit with your identity.',
    },
    {
      q: 'What is a GitHub account used for in this tutorial?',
      options: ['Compiling source code into binaries', 'Running code locally without internet', 'Replacing Git entirely', 'Hosting remote repositories and collaborating online'],
      answer: 3,
      explanation: 'GitHub is a cloud platform for hosting Git repositories, collaborating via pull requests, and running GitHub Actions. Git itself still runs locally.',
    },
    {
      q: 'What does `git config --global init.defaultBranch main` do?',
      options: ['Sets "main" as the default name for new repositories', 'Deletes all other branches', 'Renames your current branch to main', 'Creates a main branch on GitHub'],
      answer: 0,
      explanation: 'This global setting tells Git to use "main" instead of "master" when you run `git init` on a new project.',
    },
    {
      q: 'Which tool is NOT strictly required to follow this tutorial?',
      options: ['A text editor', 'Docker Desktop', 'A web browser', 'Git'],
      answer: 1,
      explanation: 'You need Git, an editor, and a browser for GitHub. Docker is useful in some CI/CD setups but is not a prerequisite for learning Git and GitHub basics.',
    },
    {
      q: 'Where should you download Git from?',
      options: ['github.com/download', 'python.org', 'git-scm.com', 'npmjs.com'],
      answer: 2,
      explanation: 'The official Git website is git-scm.com, which provides installers for Windows, macOS, and Linux.',
    },
    {
      q: 'What does the `--global` flag mean in `git config --global`?',
      options: ['It only works inside GitHub Actions', 'It shares settings with everyone on GitHub', 'It makes the repository public', 'It applies settings to all repositories for your user account on this machine'],
      answer: 3,
      explanation: '`--global` writes settings to your user-level Git config file (~/.gitconfig), applying them to every repository unless overridden locally.',
    },
    {
      q: 'A code editor like VS Code is recommended because it helps you:',
      options: ['Write and review code and diffs comfortably', 'Replace the need for Git', 'Automatically deploy to production', 'Create GitHub accounts'],
      answer: 0,
      explanation: 'Editors provide syntax highlighting, integrated terminals, and diff views — all helpful when writing code and reviewing changes before committing.',
    },
    {
      q: 'Before pushing code to GitHub, you should first:',
      options: ['Disable all browser extensions', 'Install Git and configure your identity', 'Purchase a domain name', 'Delete your local repository'],
      answer: 1,
      explanation: 'Install Git, set your name/email, create a GitHub account, and initialize or clone a repo. Domain names and browser settings are unrelated to getting started.',
    }
  ],
  'cicd-intro': [
    {
      q: 'What does CI stand for in CI/CD?',
      options: ['Central Infrastructure', 'Cloud Integration', 'Continuous Integration', 'Code Inspection'],
      answer: 2,
      explanation: 'CI means Continuous Integration — automatically building and testing code whenever changes are integrated into a shared repository.',
    },
    {
      q: 'What does CD typically refer to in modern DevOps?',
      options: ['Continuous Documentation', 'Centralized Debugging', 'Code Deletion', 'Continuous Delivery or Continuous Deployment'],
      answer: 3,
      explanation: 'CD usually means Continuous Delivery (always ready to release) or Continuous Deployment (automatically releasing to production after tests pass).',
    },
    {
      q: 'Which analogy best describes CI?',
      options: ['Running a spell-checker on every paragraph you write', 'Painting a house without primer', 'Cooking without tasting the food', 'Mailing a package without checking the address'],
      answer: 0,
      explanation: 'CI continuously checks code quality — like spell-check running on each change — so problems are caught immediately rather than later.',
    },
    {
      q: 'What is the main benefit of catching bugs early in CI?',
      options: ['Developers write less code', 'Fixes are cheaper and faster because the change is fresh', 'Bugs become harder to fix', 'GitHub charges less money'],
      answer: 1,
      explanation: 'When a bug is found minutes after a change, the developer still remembers the context. Fixing bugs weeks later costs far more time and coordination.',
    },
    {
      q: 'In a CI/CD pipeline, what usually happens AFTER automated tests pass?',
      options: ['All code is deleted', 'Developers stop using Git', 'The project can be built and deployed', 'Pull requests are automatically rejected'],
      answer: 2,
      explanation: 'After CI validates code, CD steps package and deploy the application — or prepare it for release — depending on your pipeline design.',
    },
    {
      q: 'Which phrase describes the "works on my machine" problem CI helps solve?',
      options: ['Git is unreliable', 'Browsers cannot run JavaScript', 'Computers are too slow', 'Code runs locally but fails in a standardized automated environment revealing hidden issues'],
      answer: 3,
      explanation: 'CI runs on clean, consistent runners. If code only works on one developer\'s laptop, CI exposes missing dependencies, config differences, or untested paths.',
    },
    {
      q: 'GitHub Actions fits into CI/CD by:',
      options: ['Providing cloud automation triggered by repository events', 'Hosting only images and videos', 'Replacing Git entirely', 'Managing employee payroll'],
      answer: 0,
      explanation: 'GitHub Actions runs workflows (build, test, deploy) when events like push or pull_request occur in your repository.',
    },
    {
      q: 'Which is NOT a common reason teams adopt CI/CD?',
      options: ['Faster feedback on code quality', 'Guaranteed zero bugs forever', 'Better collaboration at scale', 'Reduced manual deployment steps'],
      answer: 1,
      explanation: 'CI/CD reduces risk and speeds delivery but does not guarantee perfection. Tests can miss bugs; pipelines must be maintained thoughtfully.',
    },
    {
      q: 'A "green" CI pipeline means:',
      options: ['The repository was deleted', 'No code was written', 'The workflow completed successfully', 'The website color theme changed'],
      answer: 2,
      explanation: 'Green checks indicate all jobs and steps passed. Red means something failed — a test, lint rule, or build step.',
    },
    {
      q: 'Which order best describes a typical CI/CD flow?',
      options: ['Deploy → Write code → Delete repo', 'Merge → Never test → Hope for the best', 'Clone → Never push → Manual FTP only', 'Push code → Run automated tests → Deploy if tests pass'],
      answer: 3,
      explanation: 'Developers push changes, CI runs automated quality checks, and CD deploys or prepares releases when those checks succeed.',
    }
  ],
  'git-basics': [
    {
      q: 'What is a Git repository?',
      options: ['A folder tracked by Git including its history', 'A GitHub-only feature', 'A type of programming language', 'A social media profile'],
      answer: 0,
      explanation: 'A repository is a project directory plus the hidden `.git` folder storing every commit, branch, and tag.',
    },
    {
      q: 'What is a commit?',
      options: ['An email to your team', 'A permanent snapshot of staged changes with a message', 'A GitHub pull request', 'A temporary file edit with no history'],
      answer: 1,
      explanation: 'A commit records a snapshot of staged files, a unique hash, author info, timestamp, and a descriptive message.',
    },
    {
      q: 'Which command stages a file for the next commit?',
      options: ['git push', 'git log', 'git add', 'git remote'],
      answer: 2,
      explanation: '`git add` moves changes from the working directory into the staging area, preparing them for `git commit`.',
    },
    {
      q: 'What does `git status` show?',
      options: ['Your GitHub follower count', 'The price of cloud hosting', 'Only deleted branches', 'Which files are modified, staged, or untracked'],
      answer: 3,
      explanation: '`git status` summarizes the working tree — changed files, staged files, and untracked files — and suggests next commands.',
    },
    {
      q: 'The staging area sits between:',
      options: ['Working directory and repository history', 'GitHub and the internet', 'Main and production branches only', 'Two remote servers'],
      answer: 0,
      explanation: 'You edit files (working directory), stage selected changes (`git add`), then commit them into the repository history.',
    },
    {
      q: 'Which command creates a new Git repository in the current folder?',
      options: ['git deploy', 'git init', 'git fork', 'git clone'],
      answer: 1,
      explanation: '`git init` creates a new `.git` directory, turning the current folder into a repository.',
    },
    {
      q: 'What information does `git log --oneline` display?',
      options: ['Remote server passwords', 'GitHub Actions billing', 'A compact list of commits with short hashes and messages', 'Only file sizes'],
      answer: 2,
      explanation: '`--oneline` compresses each commit to one line: abbreviated hash plus commit message subject.',
    },
    {
      q: 'A good commit message should be:',
      options: ['Empty', 'A random string of characters', 'The same word for every commit', 'A clear, concise description of what changed and why'],
      answer: 3,
      explanation: 'Clear messages help teammates and future you understand history without reading every line of code.',
    },
    {
      q: 'Where is Git history stored locally?',
      options: ['In the `.git` directory', 'In package.json', 'Only on GitHub servers', 'In your browser cache'],
      answer: 0,
      explanation: 'The `.git` folder contains objects, refs, and config — the full local history — even when offline.',
    },
    {
      q: 'Which command saves staged changes permanently in local history?',
      options: ['git browse', 'git commit', 'git stage-only', 'git fetch'],
      answer: 1,
      explanation: '`git commit` creates a new snapshot from the staging area and adds it to the repository history.',
    }
  ],
  'github-essentials': [
    {
      q: 'What is GitHub primarily used for?',
      options: ['Replacing all programming languages', 'Designing hardware circuits', 'Hosting Git repositories and enabling collaboration online', 'Running Git locally without internet'],
      answer: 2,
      explanation: 'GitHub hosts remote Git repos and adds issues, pull requests, Actions, Pages, and team features on top of Git.',
    },
    {
      q: 'What is "origin" in Git terminology?',
      options: ['The GitHub CEO username', 'The first commit ever made', 'A type of branch that cannot be deleted', 'The default name for your primary remote repository'],
      answer: 3,
      explanation: 'When you clone or add a remote, Git conventionally names it `origin` — the main upstream repository URL.',
    },
    {
      q: 'Which command links a local repo to a GitHub remote?',
      options: ['git remote add origin <url>', 'git upload main', 'git link github', 'git connect --cloud'],
      answer: 0,
      explanation: '`git remote add origin <url>` registers a named remote pointing to your GitHub repository.',
    },
    {
      q: 'What does `git push -u origin main` do?',
      options: ['Downloads code from GitHub', 'Uploads local commits to the main branch and sets upstream tracking', 'Creates a pull request automatically', 'Deletes the main branch'],
      answer: 1,
      explanation: 'Push sends commits to GitHub. `-u` sets `origin/main` as the upstream so future `git push` and `git pull` know where to sync.',
    },
    {
      q: 'GitHub Issues are best used for:',
      options: ['Storing binary video files only', 'Replacing commit messages', 'Tracking bugs, tasks, and feature requests', 'Running unit tests locally'],
      answer: 2,
      explanation: 'Issues are lightweight tickets for discussing work — bugs to fix, ideas to explore, tasks to assign.',
    },
    {
      q: 'How does GitHub relate to Git?',
      options: ['Git cannot work without GitHub', 'GitHub only works on Windows', 'GitHub is Git — they are identical', 'GitHub hosts Git repositories and adds collaboration features'],
      answer: 3,
      explanation: 'Git is the version control tool; GitHub is a platform built around Git. You can use Git entirely offline without GitHub.',
    },
    {
      q: 'GitHub Pages is designed for hosting:',
      options: ['Static websites like HTML/CSS/JS', 'Desktop applications only', 'Private database servers with SQL', 'Large video streaming services'],
      answer: 0,
      explanation: 'GitHub Pages serves static assets — HTML, CSS, JavaScript, images — directly from a repository branch or Actions artifact.',
    },
    {
      q: 'A public GitHub repository means:',
      options: ['Anyone can push without authentication', 'Anyone can view the code (unless restricted by org policy)', 'It must contain secrets', 'It cannot use GitHub Actions'],
      answer: 1,
      explanation: 'Public repos are visible to everyone. Write access still requires permission; strangers cannot push to your repo by default.',
    },
    {
      q: 'Which GitHub feature automates CI/CD workflows?',
      options: ['GitHub Gists', 'GitHub Issues', 'GitHub Actions', 'GitHub Stars'],
      answer: 2,
      explanation: 'GitHub Actions runs YAML-defined workflows on events like push, pull_request, or schedule.',
    },
    {
      q: 'Cloning vs. creating a new repo: cloning is used when:',
      options: ['You want an empty folder with no history', 'You have no internet connection ever', 'You want to delete GitHub history', 'You want a local copy of an existing remote repository'],
      answer: 3,
      explanation: '`git clone` downloads an existing repository including full history. `git init` starts fresh locally.',
    }
  ],
  repositories: [
    {
      q: 'What does `git clone` do?',
      options: ['Creates a local copy of a remote repository with full history', 'Uploads local commits to GitHub', 'Merges all branches automatically', 'Deletes untracked files'],
      answer: 0,
      explanation: 'Clone fetches all commits, branches, and files from a remote URL into a new local directory.',
    },
    {
      q: 'What does `git pull origin main` do?',
      options: ['Runs unit tests', 'Fetches and merges remote changes into your current branch', 'Pushes your commits to GitHub', 'Creates a new GitHub account'],
      answer: 1,
      explanation: 'Pull combines `git fetch` (download) and merge (integrate) to update your local branch with remote changes.',
    },
    {
      q: 'When should you pull before starting new work?',
      options: ['Never — pull is optional', 'Only on Fridays', 'Before creating commits, to base work on the latest shared code', 'Only after deleting main'],
      answer: 2,
      explanation: 'Pulling first reduces merge conflicts by ensuring you build on the most recent team changes.',
    },
    {
      q: 'What happens if you push without pulling when teammates have new commits?',
      options: ['Your commits are duplicated automatically', 'GitHub deletes their commits', 'Push always succeeds silently', 'Git may reject the push until you integrate remote changes'],
      answer: 3,
      explanation: 'Git protects remote history. If you are behind, you must pull (or fetch and rebase) before pushing.',
    },
    {
      q: 'A merge conflict occurs when:',
      options: ['Two changes compete for the same lines and Git cannot auto-merge', 'The internet disconnects', 'GitHub Actions is disabled', 'You use the wrong editor theme'],
      answer: 0,
      explanation: 'Conflicts arise when parallel edits touch the same code. Git marks conflict regions for manual resolution.',
    },
    {
      q: 'After resolving a merge conflict, you should:',
      options: ['Uninstall Git', 'Stage the resolved files and commit', 'Ignore the files', 'Delete the repository'],
      answer: 1,
      explanation: 'Edit conflict markers, verify the code, `git add` the fixed files, then commit to record the merge resolution.',
    },
    {
      q: 'What does `git fetch` do compared to `git pull`?',
      options: ['Pull only downloads without merging', 'They are identical in all cases', 'Fetch downloads updates but does not merge; pull also merges', 'Fetch deletes local branches'],
      answer: 2,
      explanation: 'Fetch updates remote-tracking branches safely. Pull = fetch + merge into your current branch.',
    },
    {
      q: 'Untracked files are files that:',
      options: ['Are already committed to main', 'Cannot be added to Git', 'Only exist on GitHub', 'Exist in your folder but Git is not yet monitoring them'],
      answer: 3,
      explanation: 'New files show as untracked in `git status` until you `git add` them.',
    },
    {
      q: 'Why is pushing regularly important on team projects?',
      options: ['It backs up your work and shares progress with teammates', 'It makes repos private automatically', 'It removes commit history', 'It disables CI/CD'],
      answer: 0,
      explanation: 'Push sends your commits to the remote backup and lets others see and build on your changes.',
    },
    {
      q: 'The command `git push origin main` sends commits to:',
      options: ['Every branch on GitHub automatically', 'The main branch on the origin remote', 'Your local `.git` folder only', 'A random fork'],
      answer: 1,
      explanation: 'This pushes your current branch\'s new commits to the `main` branch on the remote named `origin`.',
    }
  ],
  branching: [
    {
      q: 'What is a branch in Git?',
      options: ['An encrypted password file', 'A type of commit message', 'A separate line of development diverging from the main timeline', 'A GitHub billing plan'],
      answer: 2,
      explanation: 'Branches are movable pointers to commits, letting you work in isolation without disturbing main.',
    },
    {
      q: 'Why do teams avoid committing directly to main?',
      options: ['GitHub prohibits it technically', 'Branches are slower than main', 'Main cannot receive commits', 'Direct commits bypass review and CI checks, increasing risk'],
      answer: 3,
      explanation: 'Feature branches plus pull requests enable code review, automated testing, and safer integration.',
    },
    {
      q: 'Which command creates AND switches to a new branch?',
      options: ['git checkout -b feature/login', 'git branch -d feature', 'git push origin main', 'git log --graph'],
      answer: 0,
      explanation: '`git checkout -b <name>` (or `git switch -c <name>`) creates a branch and checks it out in one step.',
    },
    {
      q: 'What does merging a branch do?',
      options: ['Deletes all commits on main', 'Integrates changes from one branch into another', 'Converts HTML to PDF', 'Uploads secrets to GitHub'],
      answer: 1,
      explanation: 'Merge combines histories, bringing commits from a feature branch into target branch like main.',
    },
    {
      q: 'A branch named `fix/broken-navbar` follows which convention?',
      options: ['A security vulnerability', 'GitHub-required syntax', 'Prefix indicating purpose (fix) plus short description', 'Random naming'],
      answer: 2,
      explanation: 'Prefixes like feature/, fix/, and docs/ communicate intent and keep branch lists organized.',
    },
    {
      q: 'After merging a feature branch, best practice is to:',
      options: ['Rename main to feature', 'Keep the branch forever unmerged', 'Disable all future branches', 'Delete the merged branch to reduce clutter'],
      answer: 3,
      explanation: 'Merged branches have served their purpose. Deleting them keeps the repo tidy; history remains in Git.',
    },
    {
      q: '`git checkout main` (or `git switch main`) does what?',
      options: ['Switches your working directory to the main branch', 'Pushes to GitHub', 'Runs CI tests', 'Deletes the main branch'],
      answer: 0,
      explanation: 'Checkout/switch updates your working files to match the selected branch tip.',
    },
    {
      q: 'Feature branches allow developers to:',
      options: ['Remove Git history', 'Work in parallel without constantly conflicting on main', 'Skip all testing', 'Avoid writing commit messages'],
      answer: 1,
      explanation: 'Isolated branches let multiple people build different features simultaneously, merging when ready.',
    },
    {
      q: 'What is the default branch name recommended in this tutorial?',
      options: ['trunk-only', 'master only', 'main', 'production-always'],
      answer: 2,
      explanation: 'Modern Git and GitHub default to `main` as the primary integration branch name.',
    },
    {
      q: 'Pushing a branch with `git push -u origin feature/x` enables:',
      options: ['Unlimited GitHub Actions minutes', 'Automatic deletion of main', 'Public exposure of secrets', 'Upstream tracking so future push/pull knows the remote branch'],
      answer: 3,
      explanation: '`-u` links your local branch to `origin/feature/x`, simplifying subsequent sync commands.',
    }
  ],
  'pull-requests': [
    {
      q: 'What is a Pull Request (PR)?',
      options: ['A request to merge proposed changes and discuss them before integration', 'A command to delete Git history', 'A GitHub password reset form', 'A local-only Git feature with no web UI'],
      answer: 0,
      explanation: 'PRs propose merging a branch into another (usually main), showing diffs, enabling reviews, and triggering CI.',
    },
    {
      q: 'When do CI checks typically run on a pull request?',
      options: ['Only after manual deployment to production', 'Automatically when the PR is opened or updated', 'Never — CI only runs on main', 'Only if the PR has more than 100 files'],
      answer: 1,
      explanation: 'Workflows triggered on `pull_request` events run tests against the proposed changes before merge.',
    },
    {
      q: 'A PR description should explain:',
      options: ['Your GitHub password', 'Nothing — titles are enough', 'What changed, why, and how to test it', 'Only the author\'s favorite colors'],
      answer: 2,
      explanation: 'Good descriptions give reviewers context, reducing back-and-forth and speeding approval.',
    },
    {
      q: 'What does "Fixes #42" in a PR description do?',
      options: ['Deletes 42 commits', 'Breaks issue 42', 'Creates 42 new branches', 'Links the PR to issue 42 and can auto-close it on merge'],
      answer: 3,
      explanation: 'GitHub recognizes keywords like Fixes, Closes, and Resolves to link and close issues when the PR merges.',
    },
    {
      q: 'Code review in a PR primarily helps:',
      options: ['Catch mistakes, share knowledge, and maintain quality standards', 'Replace Git entirely', 'Increase bugs', 'Eliminate the need for tests'],
      answer: 0,
      explanation: 'Human review complements automated CI by spotting logic errors, design issues, and readability problems.',
    },
    {
      q: 'A PR should usually be merged only when:',
      options: ['No description is provided', 'Reviews are approved and required CI checks pass', 'It is opened for one second', 'Main branch is deleted first'],
      answer: 1,
      explanation: 'Branch protection rules often require approvals and green checks before merging.',
    },
    {
      q: 'The "diff" tab in a PR shows:',
      options: ['Runner machine specifications', 'GitHub billing invoices', 'Line-by-line changes between base and head branches', 'Only commit author birthdays'],
      answer: 2,
      explanation: 'Diffs highlight additions and deletions, helping reviewers understand exactly what will change.',
    },
    {
      q: 'Who can comment on a public repository PR?',
      options: ['Only GitHub employees', 'No one', 'Only bots', 'Depends on permissions — often collaborators; public repos may allow broader discussion per settings'],
      answer: 3,
      explanation: 'Comment permissions vary by repo visibility and organization settings, but PRs are designed for discussion.',
    },
    {
      q: 'Merging a PR into main without CI passing is risky because:',
      options: ['Untested or broken code may enter the shared branch', 'Pages deploys automatically always fail', 'GitHub deletes all issues', 'Git will uninstall itself'],
      answer: 0,
      explanation: 'Skipping failed checks defeats the purpose of CI — broken code flows into production paths.',
    },
    {
      q: 'After a PR merges, the feature branch should typically be:',
      options: ['Renamed to main', 'Deleted after merge since commits live on main', 'Force-pushed daily forever', 'Converted to a GitHub Secret'],
      answer: 1,
      explanation: 'Delete merged branches to reduce clutter. The commits remain reachable via main\'s history.',
    }
  ],
  'actions-intro': [
    {
      q: 'Where do GitHub Actions workflow files live?',
      options: ['In `.git/config`', 'In the root README only', 'In `.github/workflows/` as YAML files', 'On your desktop outside the repo'],
      answer: 2,
      explanation: 'Workflows are YAML files in `.github/workflows/`. Each file defines one or more automated pipelines.',
    },
    {
      q: 'What triggers a GitHub Actions workflow?',
      options: ['Changing your laptop wallpaper', 'Viewing a repo without logging in', 'Only manual fax machines', 'Events like push, pull_request, or schedule'],
      answer: 3,
      explanation: 'The `on:` key lists events that start workflow runs — webhooks from GitHub to Actions.',
    },
    {
      q: 'What is a runner in GitHub Actions?',
      options: ['A temporary server that executes workflow jobs', 'A Git branch type', 'A person who reviews PRs', 'A JavaScript framework'],
      answer: 0,
      explanation: 'Runners are VMs (GitHub-hosted or self-hosted) that checkout code and run steps.',
    },
    {
      q: 'In a workflow, a Job is:',
      options: ['A Git commit message', 'A group of steps executed on the same runner', 'A paid GitHub addon only for enterprises', 'A single shell command only'],
      answer: 1,
      explanation: 'Jobs group related steps. Jobs can run in parallel or depend on each other via `needs:`.',
    },
    {
      q: 'What does `runs-on: ubuntu-latest` specify?',
      options: ['The programming language', 'The GitHub username', 'The operating system of the runner machine', 'The deployment domain'],
      answer: 2,
      explanation: '`runs-on` selects the runner OS image — commonly ubuntu-latest, windows-latest, or macos-latest.',
    },
    {
      q: 'What does `actions/checkout@v4` do?',
      options: ['Publishes to npm automatically', 'Deletes the repository', 'Creates a new GitHub org', 'Checks out your repository code onto the runner'],
      answer: 3,
      explanation: 'The checkout action clones your repo into the runner workspace so subsequent steps can access files.',
    },
    {
      q: 'A Step in a workflow can be:',
      options: ['Running a shell command (`run:`) or using a prebuilt Action (`uses:`)', 'Only a comment', 'A merge conflict marker', 'A CNAME record'],
      answer: 0,
      explanation: 'Steps either execute commands inline or reuse marketplace actions like setup-node or checkout.',
    },
    {
      q: 'GitHub Actions marketplace provides:',
      options: ['Free laptops', 'Prebuilt reusable actions for common tasks', 'Replacement for Git', 'Only paid enterprise support tickets'],
      answer: 1,
      explanation: 'The marketplace hosts community and official actions — deploy, lint, notify — you reference with `uses:`.',
    },
    {
      q: 'Workflow files use which data format?',
      options: ['Binary .exe', 'JSON exclusively', 'YAML', 'Plain HTML'],
      answer: 2,
      explanation: 'Workflows are written in YAML — indentation-sensitive, human-readable configuration.',
    },
    {
      q: 'If a workflow step fails, the job typically:',
      options: ['Silently succeeds', 'Auto-merges the PR', 'Deletes the GitHub account', 'Marks the job as failed and stops remaining steps in that job'],
      answer: 3,
      explanation: 'Failed steps fail the job unless configured with `continue-on-error: true`. Downstream steps in that job are skipped.',
    }
  ],
  'ci-pipelines': [
    {
      q: 'What is the first step in most CI pipelines after a trigger?',
      options: ['Check out the repository code onto the runner', 'Deploy to production immediately', 'Change repository visibility', 'Delete all tests'],
      answer: 0,
      explanation: 'Runners start empty. Checkout brings your commit\'s files into the workspace for build and test steps.',
    },
    {
      q: 'Why run `npm ci` in CI instead of only `npm install`?',
      options: ['GitHub requires it legally', 'It installs exact versions from lockfile for reproducible builds', 'It is slower on purpose', 'It skips all dependencies'],
      answer: 1,
      explanation: '`npm ci` uses package-lock.json for clean, deterministic installs — ideal for consistent CI environments.',
    },
    {
      q: 'Linting in CI helps by:',
      options: ['Replacing all unit tests', 'Encrypting secrets', 'Enforcing code style and catching common errors automatically', 'Generating invoices'],
      answer: 2,
      explanation: 'Linters flag stylistic and some logical issues before human review, keeping codebases consistent.',
    },
    {
      q: 'Running tests in CI ensures:',
      options: ['No one can open pull requests', 'Domains auto-renew', 'Git history is compressed', 'Code behavior matches expectations on a clean machine'],
      answer: 3,
      explanation: 'Automated tests validate functionality independent of any single developer\'s local setup.',
    },
    {
      q: 'A matrix strategy in GitHub Actions allows:',
      options: ['Running the same job across multiple configurations in parallel', 'Merging without review', 'Deleting multiple repos at once', 'Disabling YAML'],
      answer: 0,
      explanation: 'Matrix builds test combinations like Node 18/20 or Ubuntu/Windows concurrently.',
    },
    {
      q: 'When should CI run on pull requests?',
      options: ['Only after deployment', 'To validate proposed changes before they merge into main', 'Never for security', 'Only on deleted branches'],
      answer: 1,
      explanation: 'PR-triggered CI gives fast feedback to authors and blocks merging if checks fail (when protected).',
    },
    {
      q: 'A failed CI check on a PR should prompt the author to:',
      options: ['Delete GitHub', 'Remove all tests permanently', 'Fix the issue and push new commits to the same branch', 'Merge immediately anyway'],
      answer: 2,
      explanation: 'Push additional commits to the PR branch; CI re-runs automatically on updates.',
    },
    {
      q: 'Caching dependencies in CI primarily:',
      options: ['Disables ubuntu runners', 'Prevents cloning code', 'Stores passwords in logs', 'Speeds up workflows by reusing downloaded packages between runs'],
      answer: 3,
      explanation: 'Cache actions store node_modules or pip wheels keyed by lockfile hashes, reducing install time.',
    },
    {
      q: 'Branch protection with required status checks means:',
      options: ['Merging is blocked until specified CI jobs pass', 'All branches are deleted nightly', 'Only admins may clone', 'Actions cannot run'],
      answer: 0,
      explanation: 'Required checks enforce quality gates — merges wait for green CI results.',
    },
    {
      q: 'Building the project in CI (compile/bundle) verifies:',
      options: ['All issues are closed', 'The project can be assembled successfully, not just that unit tests pass in isolation', 'GitHub Pages is disabled', 'Secrets are public'],
      answer: 1,
      explanation: 'Build steps catch missing imports, type errors, and bundler failures that unit tests might miss.',
    }
  ],
  'cd-deployment': [
    {
      q: 'Continuous Deployment typically means:',
      options: ['Manual copying via USB drives only', 'Deleting staging servers weekly', 'Automatically releasing to production after CI passes', 'Never deploying anything'],
      answer: 2,
      explanation: 'CD automates the path from validated code to live environments, reducing manual release toil.',
    },
    {
      q: 'GitHub Pages is best suited for:',
      options: ['Private SQL database hosting', 'Large multiplayer game servers', 'Desktop app binary stores only', 'Static sites without server-side runtime'],
      answer: 3,
      explanation: 'Pages serves static files — HTML, CSS, JS — over HTTPS from GitHub infrastructure.',
    },
    {
      q: 'Why store API keys in GitHub Secrets instead of workflow YAML?',
      options: ['Secrets are encrypted and masked in logs; YAML is visible in the repo', 'Secrets disable Actions', 'GitHub bans environment variables', 'YAML runs faster'],
      answer: 0,
      explanation: 'Committed secrets leak to anyone with repo access and live forever in Git history. Encrypted secrets inject at runtime.',
    },
    {
      q: 'How do you reference a secret named API_KEY in a workflow?',
      options: ['Write it in README', '${{ secrets.API_KEY }}', '%%API_KEY%%', 'secret("API_KEY") in HTML'],
      answer: 1,
      explanation: 'GitHub Actions expression syntax `${{ secrets.NAME }}` exposes secrets to steps securely.',
    },
    {
      q: 'A GitHub Environment with required reviewers is used to:',
      options: ['Delete workflows', 'Make repos public automatically', 'Add manual approval gates before deployment to sensitive targets like production', 'Speed up all deploys with zero humans'],
      answer: 2,
      explanation: 'Environment protection rules pause deployment jobs until designated reviewers approve.',
    },
    {
      q: 'The CNAME file in a GitHub Pages repo specifies:',
      options: ['CI test commands', 'Your Git password', 'The Node.js version', 'A custom domain for your site'],
      answer: 3,
      explanation: 'CNAME tells GitHub Pages which custom domain (e.g., www.example.com) should serve your site.',
    },
    {
      q: 'Deploying via GitHub Actions often requires which permissions?',
      options: ['pages: write and id-token: write (for modern Pages deployment)', 'Ability to force-push all forks globally', 'No permissions ever', 'Disabling HTTPS'],
      answer: 0,
      explanation: 'The recommended Pages deploy workflow uses OIDC permissions to publish artifacts securely.',
    },
    {
      q: 'Staging vs. production environments help teams:',
      options: ['Disable pull requests', 'Test deployments in a safe replica before promoting to real users', 'Avoid all testing', 'Remove Git history'],
      answer: 1,
      explanation: 'Staging mirrors production closely for final validation; production serves live traffic.',
    },
    {
      q: 'After merging to main, a CD pipeline might:',
      options: ['Remove all collaborators', 'Convert the repo to private permanently', 'Automatically build and deploy the latest version to GitHub Pages', 'Erase all commits'],
      answer: 2,
      explanation: 'Push-to-main triggers deploy jobs that publish static assets or application builds to hosting targets.',
    },
    {
      q: 'Which practice is essential for secure CI/CD?',
      options: ['Print secrets in logs for debugging always', 'Share PATs in chat', 'Disable HTTPS on Pages', 'Never commit secrets; rotate keys if leaked; use least-privilege tokens'],
      answer: 3,
      explanation: 'Treat secrets carefully — use GitHub Secrets, OIDC over long-lived tokens when possible, and audit access.',
    }
  ]
};

/* ── DOM Ready ── */
document.addEventListener('DOMContentLoaded', () => {
  buildTOC();
  renderAllQuizzes();
  initMobileNav();
  initScrollSpy();
});

/* ── Table of Contents ── */
function buildTOC() {
  const desktopToc = document.getElementById('desktop-toc');
  const mobileToc = document.getElementById('mobile-toc');

  SECTIONS.forEach(({ id, label }) => {
    desktopToc.appendChild(createTocLink(id, label));
    mobileToc.appendChild(createTocLink(id, label, true));
  });
}

function createTocLink(id, label, isMobile = false) {
  const a = document.createElement('a');
  a.href = `#${id}`;
  a.dataset.section = id;
  a.textContent = label;
  a.className =
    'toc-link block px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-lg border-l-2 border-transparent transition-colors';
  if (isMobile) {
    a.addEventListener('click', closeMobileNav);
  }
  return a;
}

/* ── Quiz Rendering ── */
function renderAllQuizzes() {
  let globalIndex = 0;
  SECTIONS.forEach(({ id, label }) => {
    const container = document.querySelector(`.quiz-container[data-section="${id}"]`);
    const questions = MCQS[id];
    if (!container || !questions) return;

    container.innerHTML = buildQuizHeader(label, questions.length);
    questions.forEach((mcq, i) => {
      globalIndex += 1;
      container.appendChild(buildQuestionCard(mcq, globalIndex, i + 1));
    });
  });
}

function buildQuizHeader(sectionLabel, count) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div class="flex items-center gap-3 mb-6">
      <div class="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
        <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-zinc-100">Section Quiz</h3>
        <p class="text-sm text-zinc-400">${count} questions · ${sectionLabel}</p>
      </div>
    </div>`;
  return wrapper;
}

function buildQuestionCard(mcq, globalNum, sectionNum) {
  const letters = ['A', 'B', 'C', 'D'];
  const card = document.createElement('article');
  card.className =
    'mb-4 bg-zinc-900 border border-zinc-800 rounded-xl p-5 sm:p-6 shadow-sm hover:border-zinc-700 transition-colors';

  const optionsHTML = mcq.options
    .map(
      (opt, i) => `
      <li class="flex items-start gap-3 text-sm text-zinc-300">
        <span class="shrink-0 w-6 h-6 rounded-md bg-zinc-800 text-zinc-400 text-xs font-medium flex items-center justify-center">${letters[i]}</span>
        <span>${opt}</span>
      </li>`
    )
    .join('');

  card.innerHTML = `
    <p class="font-medium text-zinc-100 mb-4 leading-relaxed">
      <span class="text-accent font-semibold mr-2">Q${globalNum}.</span>${mcq.q}
    </p>
    <ul class="space-y-2.5 mb-4">${optionsHTML}</ul>
    <details class="group">
      <summary class="cursor-pointer select-none flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors py-2 px-3 rounded-lg bg-accent/5 border border-accent/10 hover:bg-accent/10">
        <svg class="w-4 h-4 transition-transform group-open:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        Show Answer &amp; Explanation
      </summary>
      <div class="mt-3 p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-sm leading-relaxed">
        <p class="font-semibold text-emerald-400 mb-2">Correct Answer: ${letters[mcq.answer]}. ${mcq.options[mcq.answer]}</p>
        <p class="text-zinc-300">${mcq.explanation}</p>
      </div>
    </details>`;

  return card;
}

/* ── Mobile Navigation ── */
function initMobileNav() {
  const toggle = document.getElementById('menu-toggle');
  const close = document.getElementById('menu-close');
  const overlay = document.getElementById('overlay');

  toggle.addEventListener('click', openMobileNav);
  close.addEventListener('click', closeMobileNav);
  overlay.addEventListener('click', closeMobileNav);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileNav();
  });
}

function openMobileNav() {
  document.getElementById('mobile-drawer').classList.add('open');
  document.getElementById('overlay').classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  document.getElementById('mobile-drawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('visible');
  document.body.style.overflow = '';
}

/* ── Scroll Spy for Active TOC ── */
function initScrollSpy() {
  const sections = document.querySelectorAll('.tutorial-section');
  const links = document.querySelectorAll('.toc-link');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => {
            link.classList.toggle('active', link.dataset.section === entry.target.id);
          });
        }
      });
    },
    { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}
