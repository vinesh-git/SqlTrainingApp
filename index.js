function record() {
    var topicid = document.getElementById('id').value;
    var topic_to_be_covered = document.getElementById('topic_to_be_covered').value;
    var what_all_was_covered = document.getElementById('what_all_was_covered').value;
    var date = document.getElementById('date').value;
    var checkedvalues = document.querySelector('input[name="tasks"]:checked').value;
    var questions = document.getElementById('questions').value;
    var challenges = document.getElementById('challenges').value;

    var obj = JSON.stringify({
        id : topicid,
        Topic_To_Be_Covered : topic_to_be_covered,
        What_All_Was_Covered : what_all_was_covered,
        Date : date,
        Tasks_Given : checkedvalues,
        Any_Questions : questions,
        Challenges_faced : challenges
    })

    var current = new Date();
    var text = current.toString();
    
    var date = text.substring(4,15);
    localStorage.setItem(date,obj);

}




