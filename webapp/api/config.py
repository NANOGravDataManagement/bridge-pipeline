
''' Configuration settings for the OCW backend webservices. '''

# Directory where all results are save/cache-ing is done
WORK_DIR = '/tmp/ocw/'

# Parent directory that the frontend is allowed to load files from.
# Any directory under this will be visible to the frontend.
ARCHIVE_PATH_LEADER = '/usr/local/nanograv-pipeline/data/archive/'
JOBS_PATH_LEADER = '/usr/local/nanograv-pipeline/data/jobs/'

# Path to the python script for starting residual plotting workflow
RES_SCRIPT = '/usr/local/nanograv-pipeline/pge/bin/runPulsarAnalysis.py'
OS_SCRIPT = '/usr/local/nanograv-pipeline/pge/bin/runBridgeAnalysis.py'
FSTAT_SCRIPT = '/usr/local/nanograv-pipeline/pge/bin/runFstatAnalysis.py'
BWM_SCRIPT = '/usr/local/nanograv-pipeline/pge/bin/runBWMAnalysis.py'

